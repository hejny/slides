//This are only mocked function

export function apiQuerySync(path) {
    if (Math.random() > 0.5) {
        throw new Error(`This is a sample of error`);
    }else{
        return [
            { type: path.substring(0), data: Math.random() },
        ];
    }
}

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

