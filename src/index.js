import { postprocessRemark } from './postprocessRemark';
import { preprocessRemark } from './preprocessRemark';

export async function main() {
    const id = getParameter('id');

    try {
        //todo better file name
        const content = await preprocessRemark(
            await fetchTalk(id),
            `./content/${id
                .split('/')
                .splice(0, 2)
                .join('/')}`,
        );

        document.getElementById('source').innerHTML = content;
        /*const slideshow = */
        remark.create({
            ratio: '16:9',
        });

        postprocessRemark();

        document.title = document.querySelector(
            '.remark-slide-container h1',
        ).innerText;
    } catch (error) {
        const indexMarkdown = await fetchContentFile('index.md');
        const indexHtml = markdown.toHTML(indexMarkdown);

        document.getElementById('index').innerHTML = indexHtml;
        document.getElementById('source').style.display = 'none';
    }
}

function fetchTalk(id) {
    return fetchContentFile(`${id}.md`);
}

async function fetchContentFile(contentFile) {
    const content = await fetch(`./content/${contentFile}`);
    if (content.status === 404) {
        throw new Error(`Content file "${contentFile}" not found.`);
    }
    return await content.text();
}

function getParameter(parameterName) {
    var result = null,
        tmp = [];
    location.search
        .substr(1)
        .split('&')
        .forEach(function(item) {
            tmp = item.split('=');
            if (tmp[0] === parameterName) result = decodeURIComponent(tmp[1]);
        });
    return result;
}
