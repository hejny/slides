import { fetchContentFile } from './fetchContent.js';
import { CSVToObject } from '../tools/csv.js';
import { format } from '../tools/format.js';
import { valueToDate } from '../tools/stringToValue.js';

export async function fetchTalksHtml() {
    const talksCsv = await fetchContentFile(`talks.csv`);

    const talks = CSVToObject(talksCsv);

    console.log('talks', talks);

    return talks
        .filter((talk) => talk.published)
        .sort((talk1, talk2) =>
            valueToDate(talk1.date) < valueToDate(talk2.date) ? 1 : -1,
        )
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
        <h2>
            ${[talk.date, talk.event, talk.city]
                .filter((v) => v)
                .map((v) => `<span>${format(v)}</span>`)
                .join(' | ')}
        </h2>

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
