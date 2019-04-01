import { apiQuerySync } from './api';

const events = apiQuerySync('/events');

console.log('events', events);
