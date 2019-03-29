export function postprocessRemark() {
    for (const slideContainer of document.querySelectorAll(
        '.remark-slide-container',
    )) {
        const slide = slideContainer.querySelector('.remark-slide-content'); //todo rename to slideContent

        //-----------------------------------------Background image //todo maybe to render f
        {
            const images = slide.querySelectorAll('img');
            if (images.length === 1) {
                const image = images[0];
                image.onload = () => {
                    if (
                        image.width >
                        400 /*slide.getBoundingClientRect().width*0.5*/
                    ) {
                        image.style.display = 'none';

                        slide.style.background = `url(${image.src})`;
                        slide.style.backgroundSize = 'cover';
                        slide.style.backgroundPosition = 'center center';
                        slide.classList.add('remark-slide-content-with-image');

                        for (const heading of slide.querySelectorAll('h1')) {
                            wrapElement(heading);
                        }
                    }
                };
            }
        }
        //-----------------------------------------

        //todo also working on forst slude
        addClassNameListener(
            slideContainer,
            () => {
                if (slideContainer.classList.contains('remark-visible')) {
                    render(slide);
                } else {
                    unrender(slide);
                }
            },
            false,
        );
    }
}

function render(slide) {
    console.groupCollapsed('Slide');
    console.log(slide);
    console.log(slide.innerHTML);
    slide.setAttribute('data-original-inner-html', slide.innerHTML);
    renderCodesample(slide);
    renderSampleBackground(slide);
    console.log(slide.innerHTML);
    //todo put loader
    console.groupEnd();
}

function unrender(slide) {
    if (slide.hasAttribute('data-original-inner-html')) {
        slide.innerHTML = slide.getAttribute('data-original-inner-html');
    }
}

function renderCodesample(slide) {
    const CODESAMPLE_REGEX = /<p>codesample:([a-z]+):([a-zA-Z0-9\/]+)<\/p>/;
    if (CODESAMPLE_REGEX.test(slide.innerHTML)) {
        const [full, type, jsfiddleUriPart] = slide.innerHTML.match(
            CODESAMPLE_REGEX,
        );
        console.log(`Slide is a codesample from "${jsfiddleUriPart}".`);
        slide.innerHTML = `
    <h1>🚀</h1>
    <iframe class="left" src="https://jsfiddle.net/${jsfiddleUriPart}/embedded/${type}/dark/"></iframe>
    <iframe class="right hide-topbar" src="https://jsfiddle.net/${jsfiddleUriPart}/embedded/result/dark/"></iframe>
  `;
        slide.classList.add('remark-slide-content-with-codesample');
    } else {
        console.log(`[x] Slide is not a codesample.`, CODESAMPLE_REGEX);
    }
}

function renderSampleBackground(slide) {
    const SAMPLE_BACKGROUND_REGEX = /<p>sample-background:(.+)<\/p>/;
    if (SAMPLE_BACKGROUND_REGEX.test(slide.innerHTML)) {
        const [full, url] = slide.innerHTML.match(SAMPLE_BACKGROUND_REGEX);
        console.log(`Slide is a sample in background from "${url}".`);
        slide.innerHTML = `
    <h1>🚀</h1>
    <iframe src="https://${url}"></iframe>
  `;
        slide.classList.add('remark-slide-content-with-sample-background');
    } else {
        console.log(
            `[x] Slide is not a sample in background.`,
            SAMPLE_BACKGROUND_REGEX,
        );
    }
}

function wrapElement(element) {
    element.innerHTML = `<div class="inner">${element.innerHTML}</div>`;
}

function addClassNameListener(elem, callback) {
    let lastClassName = elem.className;
    const check = () => {
        const className = elem.className;
        if (className !== lastClassName) {
            callback();
            lastClassName = className;
        }
        requestAnimationFrame(check);
    };
    check();
}
