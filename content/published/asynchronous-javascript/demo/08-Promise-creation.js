import { apiQuery } from './api';

export function apiQueryAsync(path) {
    return new Promise((resolve, reject) => {
        apiQuery('/events', (error, data) => {
            if (error) {
                reject(error);
            } else {
                resolve(data);
            }
        });
    });
}
