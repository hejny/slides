# Asynchronous Javascript


------------------------

# CPU vs. I/O

![](/content/2019/001-asynchronous-javascript/hdd.jpg)


------------------------

# Synchronous code

## PHP
```php
$content = file_get_content('file.csv');
//$content
```

## Node.js
```javascript
import {readFileSync} from 'fs';

const content = readFileSync('file.csv', 'utf8');

//content
```

------------------------

# PHP vs. Node.js

## PHP
```php
$content = file_get_content('file.csv');
//$content
```

## Node.js
```javascript
import {readFile} from 'fs';

readFile('file.csv', 'utf8', (error, events)=>{
    if (error){
        //error
    }else{
        //events
    }
});
```

------------------------

# API Calls

```javascript
import { apiQuerySync } from './api';

const events = apiQuerySync('/events');

//events
```

------------------------

# Callbacks


```javascript
import { apiQuery } from './api';


apiQuery('/events', (error, events)=>{
    if (error){
        //error
    }else{
        //events
    }
});
```

------------------------

```javascript
import { apiQuerySync } from './api';

const events = apiQuerySync('/events');//100ms
const people = apiQuerySync('/people');//100ms

//events, people
```



------------------------

# Error handling

```javascript
import {apiQuerySync} from './api';

try{
    const events = apiQuerySync('/events');//100ms
    const people = apiQuerySync('/people');//100ms
    
    //events, people

}catch(error){
    //error
}
```


------------------------

# Callback error handling

```javascript
import { apiQuery } from './api';

apiQuery('/events', (error, events)=>{
    if (error){
        //error
    }else{
        apiQuery('/people', (error, people)=>{
            if (error){
                //error
            }else{
                //events, people
            }
        });
    }
});
```

------------------------

# Callback Hell

```javascript
apiQuery('/events', (error, events)=>{
    if (error){
        //error
    }else{
        apiQuery('/people', (error, people)=>{
            if (error){
                //error
            }else{
                apiQuery('/calendar', (error, calendar)=>{
                    if (error){
                        //error
                    }else{
                        apiQuery('/posts', (error, posts)=>{
                            if (error){
                                //error
                            }else{
                                apiQuery('/profile', (error, profile)=>{
                                    if (error){
                                        //error
                                    }else{
                                        apiQuery('/whatever', (error, whatever)=>{
                                            if (error){
                                                //error
                                            }else{
                                                //Here I can use the data
                                            }
                                        });
                                    }
                                });

                            }
                        });
                    }
                });
            }
        });
    }
}); 
```

------------------------

# Parallel

```javascript
import { apiQuery } from './api';

const dataStorage = {};
const total = 2;
let loaded = 0;
let wasError = false;

function dataLoaded(queryName){
    return (error, data)=>{
        if (error){
            if(!wasError){
                //error
                wasError = true;
            }
        }else{
            dataStorage[queryName] = data;
            loaded++;
            if(loaded===total){
                //dataStorage
            }
        }
    }
}

apiQuery('/events', dataLoaded('events'));
apiQuery('/people', dataLoaded('people'));

```

------------------------

# Generator

!import demo/generator.js

------------------------

# Promise creation


```javascript
//apiAsync.js
import { apiQuery } from './api';

export function apiQueryAsync(path){
    return new Promise((resolve,reject)=>{
        apiQuery('/events', (error, data)=>{
            if (error){
                reject(error);
            }else{
                resolve(data);
            }
        });
    })
}
```


------------------------

# Promise usage


```javascript
import { apiQueryAsync } from './apiAsync';

let events, people;

//todo maybe different case
apiQueryAsync('/events')
    .then((events)=>{
        events = events;
        return apiQueryAsync('/people'); 
    })
    .then((events)=>{
        people = events; 
    })
    .catch((error)=>{
        //error
    })
    .then(()=>{
        //events, people
    })
```

-----

# Promise creation (easy way)

```javascript
import { promisify } from 'util';

const apiQueryAsync = promisify(apiQuery);
```

------------------------

# Promise All


```javascript
import { apiQueryAsync } from './apiAsync';

Promise.all(
    [
    apiQueryAsync('/events'),
    apiQueryAsync('/people')
    ]
)
    .then(([events,people])=>{
        //events, people
    })
    .catch((error)=>{
        //error
    })

```


------------------------

# Async/Await

```javascript

import { apiQueryAsync } from './apiAsync';

async function main(){
    try{
        const events = await apiQueryAsync('/events');
        const people = await apiQueryAsync('/people');
        
        //events, people

    }catch(error){
        //error
    }
}

main();
```

------------------------

# Await*


```javascript

import { apiQueryAsync } from './apiAsync';

async function main(){
    try{
        const [events, people] = await* [
            apiQueryAsync('/events'),
            apiQueryAsync('/people')
        ]

        //events, people

    }catch(error){
        //error
    }
}

main();
```

