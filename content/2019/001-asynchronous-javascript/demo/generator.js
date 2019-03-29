import { apiQuery } from './api';
//const { apiQuery } = require('./api');

function* loadAllFactory() {
    try {
        const events = yield '/events';
        const people = yield '/people';

        //events, people
    } catch (error) {
        //error
    }
}

const loadAll = loadAllFactory();

function loadLoop(data) {
    const { value, finish } = loadAll.next(data);
    if (finish) {
        return;
    }
    apiQuery(path, (error, data) => {
        if (error) {
            loadAll.throw(error);
        } else {
            loadLoop(data);
        }
    });
}

loadLoop();
