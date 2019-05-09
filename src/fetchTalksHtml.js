import { fetchContentFile } from './fetchContent.js';
import { CSVToObject } from '../tools/csv.js';

export async function fetchTalksHtml() {
    const talksCsv = await fetchContentFile(`talks.csv`);

    const talks = CSVToObject(talksCsv);

    console.log('talks', talks);

    return talks
        .filter((talk) => talk.published)
        .sort((talk1, talk2) => (talk1.date < talk2.date ? 1 : -1))
        .map(
            (talk) =>
                `
<a class="talk" href="${talk.presentationURL}" target="_blank">

    ${
        !talk.thumbnail
            ? '<div class="thumbnail empty"></div>'
            : `<div class="thumbnail" style="background: url(${
                  talk.thumbnail
              }); background-size: contain;background-repeat: no-repeat;background-position: top center;"></div>`
    }

    <div class="info">
        <h1 class="name">${talk.name}</h1>
        <h2><span class="date"> ${formatDate(
            talk.date,
        )}</span> | <span class="event">${
                    talk.event
                }</span> | <span class="city">${talk.city}</span></h2>

        ${
            !talk.description
                ? ''
                : `<p class="description">${markdown.toHTML(
                      talk.description,
                  )}</p>`
        }
    </div>


   
</a>
`,
        )
        .join('\n');
}

function formatDate(date) {
    return `${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()}`;
}
