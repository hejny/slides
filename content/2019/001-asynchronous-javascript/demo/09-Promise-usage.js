import { apiQueryAsync } from './08-Promise-creation.js';

let events, people;

//todo maybe different case
apiQueryAsync('/events')
    .then((data) => {
        events = data;
        return apiQueryAsync('/people');
    })
    .then((data) => {
        people = data;
    })
    .then(() => {
        console.log('events', events);
        console.log('people', people);
    })
    .catch((error) => {
        console.error(error);
    });
