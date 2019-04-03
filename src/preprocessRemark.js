export async function preprocessRemark(markdown, path) {
    markdown = markdown.split(/-{3,}/gm).join('---');

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
