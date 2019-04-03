import { apiQuery } from './api';

function* loadAllFactory() {
    try {
        const events = yield '/events';
        const people = yield '/people';
        console.log('events', events);
        console.log('people', people);
    } catch (error) {
        console.error(error);
    }
}
const loadAll = loadAllFactory();

function loadLoop(data) {
    const { value, done } = loadAll.next(data);
    if (done) return;
    apiQuery(value, (error, data) => {
        if (error) loadAll.throw(error);
        else loadLoop(data);
    });
}
loadLoop();
