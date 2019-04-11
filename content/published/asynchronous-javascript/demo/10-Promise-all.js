import { apiQueryAsync } from './08-Promise-creation.js';

Promise.all([apiQueryAsync('/events'), apiQueryAsync('/people')])
    .then(([events, people]) => {
        console.log('events', events);
        console.log('people', people);
    })
    .catch((error) => {
        console.error(error);
    });
