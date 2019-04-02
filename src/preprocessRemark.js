export async function preprocessRemark(markdown, path) {
    markdown = markdown.split(/-{3,}/gm).join('---');

    markdown = (await Promise.all(
        markdown.split('\n').map(async (line) => {
            if (/^\!import.+$/.test(line)) {
                const importFile = /^\!import\s+(.+)$/.exec(line)[1];
                const importFilePath = `${path}/${importFile}`;

                //console.log('importFilePath', importFilePath);

                //todo 404
                const content = await (await fetch(importFilePath)).text();
                const contentCode = `<button class="code-run" onclick="window.runScript('${importFilePath}','${importFile}')">Run the code</button>\n\`\`\`javascript\n//${importFile}\n${content}\n\`\`\``;

                return contentCode;
            } else {
                return line;
            }
        }),
    )).join('\n');

    return markdown;
}

function runScript(src,name){
    const scriptElement = document.createElement('script');
    scriptElement.type = 'module';
    scriptElement.innerHTML = `import '${src}#${Math.random()}';`; 
    //scriptElement.src = src;
    console.group(`Running demo "${name}":`);
    document.body.appendChild(scriptElement);
    console.groupEnd();
}
window.runScript = runScript;