import { apiQuerySync } from './api';

try {
    const events = apiQuerySync('/events'); //100ms
    const people = apiQuerySync('/people'); //100ms

    //events, people
    console.log('events', events);
    console.log('events', events);
} catch (error) {
    console.error(error);
}
