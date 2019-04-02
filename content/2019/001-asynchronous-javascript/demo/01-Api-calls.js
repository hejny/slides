import { apiQuerySync } from './api.js';

const events = apiQuerySync('/events');

console.log('events', events);
