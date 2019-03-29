//This is only mocked function

export function apiQuery(path, callback) {
    setTimeout(() => {
        if (Math.random() > 0.5) {
            callback(new Error(`This is a sample of error`), undefined);
        } else {
            callback(undefined, [
                { type: path.substring(0), data: Math.random() },
            ]);
        }
    }, 1000);
}
