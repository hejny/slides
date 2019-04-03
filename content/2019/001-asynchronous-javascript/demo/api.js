//This are only mocked function

let callTimes = 0;
function shouldBeApiCallError() {
    return callTimes++ < 10 ? false : Math.random() < 0.1;
}

export function apiQuerySync(path) {
    if (shouldBeApiCallError()) {
        throw new Error(`This is a sample of error of handling "${path}".`);
    } else {
        return [{ type: path.substring(0), data: Math.random() }];
    }
}

export function apiQuery(path, callback) {
    setTimeout(() => {
        if (shouldBeApiCallError()) {
            callback(
                new Error(`This is a sample of error of handling "${path}".`),
                undefined,
            );
        } else {
            callback(undefined, [
                { type: path.substring(0), data: Math.random() },
            ]);
        }
    }, 100);
}
