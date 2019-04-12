export function fetchTalk(id) {
    if (/^drafts/.test(id)) {
        return fetchContentFile(`${id}/${id.split('/')[1]}.md`);
    } else {
        return fetchContentFile(`published/${id}/${id}.md`);
    }
}

export async function fetchContentFile(contentFile) {
    const content = await fetch(`./content/${contentFile}?v=${Math.random()}`); //todo better version
    if (content.status === 404) {
        throw new Error(`Content file "${contentFile}" not found.`);
    }
    return await content.text();
}
