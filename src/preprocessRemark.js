export async function preprocessRemark(markdown, path) {
    markdown = markdown.split(/-{3,}/gm).join('---');

    markdown = (await Promise.all(
        markdown.split('\n').map(async (line) => {
            if (/^\!import.+$/.test(line)) {
                const importFile = /^\!import\s+(.+)$/.exec(line)[1];
                const importFilePath = `${path}/${importFile}`;

                console.log('importFilePath', importFilePath);

                //todo 404
                const content = await (await fetch(importFilePath)).text();
                const contentCode = `\`\`\`javascript\n//${importFile}\n${content}\n\`\`\`\n<button onclick="window.runScript('${importFilePath}')">Run the code</button>`;

                return contentCode;
            } else {
                return line;
            }
        }),
    )).join('\n');

    return markdown;
}

function runScript(src){
    const scriptElement = document.createElement('script');
    scriptElement.type = 'module';
    scriptElement.innerHTML = `import '${src}#${Math.random()}';console.log('aa');`; 
    //scriptElement.src = src;
    document.body.appendChild(scriptElement);
}
window.runScript = runScript;