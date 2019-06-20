//todo event and date on begining
//todo product placements

export async function preprocessRemark(markdown, path, branding) {
    console.log('branding', branding);

    markdown = markdown.split(/(-|=){3,}/gm).join('---');

    markdown = (await Promise.all(
        markdown.split('\n').map(async (line) => {
            if (/^\!import.+$/.test(line)) {
                const lineParsed = /^\!import\s+(([\w\.\/\-])+)(\s+(\-\-(\w+)))*$/gm.exec(
                    line,
                );
                const importFile = lineParsed[1];
                const importFilePath = `${path}/${importFile}`;

                const flag = lineParsed[5];

                //console.log('importFilePath', importFilePath);

                //todo 404
                const content = await (await fetch(importFilePath)).text();
                const contentCode = [
                    `<p class="code-filename"><span>${importFile}</span><p>`,
                    flag !== 'norun'
                        ? `<p class="code-run"><button onclick="window.runScript('${importFilePath}','${importFile}')">Run the code ▶</button></p>`
                        : null,
                    `\`\`\`javascript\n${content}\n\`\`\``,
                ]
                    .filter((l) => l)
                    .join('\n');

                return contentCode;
            } else {
                return line;
            }
        }),
    )).join('\n');

    const slides = markdown.split('---').map((slide) => {
        let [screen, notes] = slide.split('???', 2);
        notes = notes || '';
        //notes += `\n\nX`;
        return { screen, notes };
    });

    //console.log(slides);

    const normalizedLocation = window.location.toString();

    if (!branding.noBegin) {
        slides[0].screen += `


![](https://api.qrserver.com/v1/create-qr-code/?size=350x350&data=${encodeURIComponent(
            normalizedLocation,
        )})

<div class="qr-caption"><a href="https://talks.pavolhejny.com/">talks.pavolhejny.com</a></div>
<footer>${branding.event}</footer>
`;

        slides[0].notes += `
<hr/>
To present press [C] and [P] and [F];
`;
    }

    if (!branding.noEnd) {
        //todo here should be # </🏁Asynchronous JavaScript>
        const lastSlide = slides[slides.length - 1];
        lastSlide.screen = `

# </🏁Talk is="over">

![](https://api.qrserver.com/v1/create-qr-code/?size=350x350&data=${encodeURIComponent(
            normalizedLocation,
        )}})

<div class="qr-caption"><a href="https://talks.pavolhejny.com/">talks.pavolhejny.com</a></div>

    ${lastSlide.screen}

`;
    }

    console.log('slides', slides);

    markdown = slides
        .map((slide) => `${slide.screen}\n\n\n`) //TODO: ???\n${slide.notes}
        .join('---')
        .split(`----`)
        .join('');

    console.log('markdown', markdown);

    return markdown;
}

function runScript(src, name) {
    const scriptElement = document.createElement('script');
    scriptElement.type = 'module';
    scriptElement.innerHTML = `import '${src}#${Math.random()}';`;
    //scriptElement.src = src;
    console.groupEnd(); //todo better console context
    console.group(`Running demo "${name}":`);
    document.body.appendChild(scriptElement);
    document.body.removeChild(scriptElement);
}
window.runScript = runScript;
