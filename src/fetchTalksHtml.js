import { fetchContentFile } from './fetchContent.js';
import { CSVToObject } from '../tools/csv.js';

export async function fetchTalksHtml() {
    const talksCsv = await fetchContentFile(`talks.csv`);

    const talks = CSVToObject(talksCsv);

    console.log('talks', talks);

    return talks
        .filter((talk) => talk.published)
        .map(
            (talk) =>
                `
<div>
    <h1>${talk.name}</h1>

    <pre>
        ${JSON.stringify(talk, null, 4)}
    </pre>
</div>
`,
        )
        .join('\n');
}
