import { apiQueryAsync } from './08-Promise-creation.js';

let events, people;

//todo maybe different case
apiQueryAsync('/events')
    .then((events) => {
        events = events;
        return apiQueryAsync('/people');
    })
    .then((events) => {
        people = events;
    })
    .catch((error) => {
        console.error(error);
    })
    .then(() => {
        console.log('events', events);
        console.log('people', people);
    });
