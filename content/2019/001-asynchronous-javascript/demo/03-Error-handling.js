import { apiQuerySync } from './api';

try {
    const events = apiQuerySync('/events'); //100ms
    const people = apiQuerySync('/people'); //100ms

    console.log('events', events);
    console.log('people', people);
} catch (error) {
    console.error(error);
}
