import { postprocessRemark } from './postprocessRemark.js';
import { preprocessRemark } from './preprocessRemark.js';
import { getParameter } from './getParameter.js';
import { fetchTalk } from './fetchContent.js';
import { fetchTalksHtml } from './fetchTalksHtml.js';

export async function main() {
    const id = getParameter('id');
    let errorMessage;

    if (id) {
        try {
            //todo better file name
            const content = await preprocessRemark(
                await fetchTalk(id),
                `./content/${id
                    .split('/')
                    .splice(0, 2)
                    .join('/')}`,
                {
                    noBegin: !!getParameter('noBegin'),
                    noEnd: !!getParameter('noEnd'),
                    event: getParameter('event'),
                },
            );

            document.getElementById(
                'root',
            ).innerHTML = `<textarea id="source"></textarea>`;
            document.getElementById('source').innerHTML = content;
            /*const slideshow = */
            remark.create({
                ratio: '16:9',
            });

            postprocessRemark();

            document.title = document.querySelector(
                '.remark-slide-container h1',
            ).innerText;

            return;
        } catch (error) {
            console.error(error);
            errorMessage = error.message;
        }
    }

    let talksHtml = await fetchTalksHtml();

    let indexHtml = `
    <div class="header">
    <h1><a href="https://www.pavolhejny.com">Pavol Hejný</a> talks</h1>
    </div>
    
    ${talksHtml}
    `;

    if (errorMessage) {
        indexHtml = `<div class="message error">${errorMessage}</div>${indexHtml}`;
    }

    if (getParameter('xid')) {
        const errorMessage = `This presentation is under construction.`;
        indexHtml = `<div class="message warning">${errorMessage}</div>${indexHtml}`;
    }

    indexHtml = `<div id="index"><div class="inner">${indexHtml}</div></div>`;

    document.getElementById('root').innerHTML = indexHtml;
    //document.getElementById('source').style.display = 'none';
}
