import { postprocessRemark } from './postprocessRemark.js';
import { preprocessRemark } from './preprocessRemark.js';
import { getParameter } from './getParameter.js';
import { fetchContentFile, fetchTalk } from './fetchContent.js';

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

    let indexMarkdown = await fetchContentFile('index.md');

    if (errorMessage) {
        indexMarkdown = `_${errorMessage}_\n\n${indexMarkdown}`;
    }

    if (getParameter('xid')) {
        const errorMessage = `This presentation is under construction.`;
        indexMarkdown = `_${errorMessage}_\n\n${indexMarkdown}`;
    }

    let indexHtml = markdown.toHTML(indexMarkdown);
    indexHtml = `<div id="index"><div class="inner">${indexHtml}</div></div>`;

    document.getElementById('root').innerHTML = indexHtml;
    document.getElementById('source').style.display = 'none';
}
