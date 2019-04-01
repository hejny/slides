import { apiQueryAsync } from './08-Promise-creation.js';

async function main() {
    try {
        const [events, people] = await Promise.all([
            apiQueryAsync('/events'),
            apiQueryAsync('/people'),
        ]);

        //events, people
    } catch (error) {
        //error
    }
}

main();
