import { apiQuery } from './api';

const dataStorage = {};
const total = 2;
let loaded = 0;
let wasError = false;

function dataLoaded(queryName) {
    return (error, data) => {
        if (error) {
            if (!wasError) {
                console.error(error);
                wasError = true;
            }
        } else {
            dataStorage[queryName] = data;
            loaded++;
            if (loaded === total) {
                console.log('events', events);
                //dataStorage
            }
        }
    };
}

apiQuery('/events', dataLoaded('events'));
apiQuery('/people', dataLoaded('people'));
