import { apiQuery } from './api';

apiQuery('/events', (error, events) => {
    if (error) {
        console.error(error);
    } else {
        console.log('events', events);
    }
});
