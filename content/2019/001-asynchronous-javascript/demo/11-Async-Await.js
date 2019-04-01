import { apiQueryAsync } from './08-Promise-creation.js';

async function main() {
    try {
        const events = await apiQueryAsync('/events');
        const people = await apiQueryAsync('/people');

        console.log('events', events);
        console.log('people', people);
    } catch (error) {
        console.error(error);
    }
}

main();
