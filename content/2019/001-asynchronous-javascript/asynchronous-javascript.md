# Asynchronous Javascript


------------------------

# sss

![](/content/2019/001-asynchronous-javascript/hdd.jpg)


------------------------


# Synchronous code

```php
$content = file_get_contents('./file.csv');
//$content
```

```javascript
import {readFileSync} from 'fs';

const content = readFileSync('./file.csv','utf8');
//content
```

------------------------

# Callbacks


```javascript
import {readFile} from 'fs';


readFile('./file.csv', 'utf8', (error, content)=>{
    if (error){
        //error
    }else{
        //content
    }
});
```

------------------------

# Error handling

```javascript
import {readFileSync} from 'fs';

try{
    const content1 = readFileSync('./file1.csv','utf8');
    const content2 = readFileSync('./file2.csv','utf8');
    
    //content1, content2

}catch(error){
    //error
}
```


------------------------

# Callback error handling

```javascript
import {readFile} from 'fs';

readFile('./file1.csv', 'utf8', (error, content1)=>{
    if (error){
        //error
    }else{
        readFile('./file2.csv', 'utf8', (error, content2)=>{
            if (error){
                //error
            }else{
                //content1, content2
            }
        });
    }
});
```

------------------------

# Callback error handling (more functional)

```javascript

acquireConnection('mongodb://db',
    onLoad(loadUser(writeToFile, errorHandler), errorHandler)
)
selectRows
writeToFile

readFile('./file1.csv', 'utf8', onLoad);

function loadUser(onUser, onError) {
    return (connection) => {...}
}

function errorHandler(error) {...}

function contentHandler(content) {...}

function onLoad(onContent, onError) {
    return (error, content) => error
        ? onError(error)
        : onContent(content);
}
```

------------------------

# Parallel

```javascript
import {readFile} from 'fs';

const fileContents = {};
const filesTotal = 2;
let filesLoaded = 0;
let wasError = false;

function fileLoaded(fileName){
    return (error, content)=>{
        if (error){
            if(!wasError){
                //error
                wasError = true;
            }
        }else{
            fileContents[fileName] = content;
            filesLoaded++;
            if(filesLoaded===filesTotal){
                //fileContents
            }
        }
    }
}

readFile('./file1.csv', 'utf8', fileLoaded('file1'));
readFile('./file2.csv', 'utf8', fileLoaded('file2'));

```

------------------------

# Callback Hell

```javascript
readFile('./file1.csv', 'utf8', (error, content1)=>{
    if (error){
        //error
    }else{
        readFile('./file2.csv', 'utf8', (error, content2)=>{
            if (error){
                //error
            }else{
                readFile('./file3.csv', 'utf8', (error, content3)=>{
                    if (error){
                        //error
                    }else{
                        readFile('./file4.csv', 'utf8', (error, content4)=>{
                            if (error){
                                //error
                            }else{
                                readFile('./file5.csv', 'utf8', (error, content5)=>{
                                    if (error){
                                        //error
                                    }else{
                                        readFile('./file6.csv', 'utf8', (error, content6)=>{
                                            if (error){
                                                //error
                                            }else{
                                                //content1,..., content6
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

# Generator

## todo

```javascript


function* loadAllFactory(){

    yield 


}


const loadAll = loadAllFactory();


loadAll.next().value;




function fileLoaded(fileName){
    return (error, content)=>{
        if (error){
            if(!wasError){
                //error
                wasError = true;
            }
        }else{
            fileContents[fileName] = content;
            filesLoaded++;
            if(filesLoaded===filesTotal){
                //fileContents
            }
        }
    }
}

readFile('./file1.csv', 'utf8', fileLoaded('file1'));

```





------------------------

# Promise


```javascript
import { readFile } from 'fs';
import { promisify } from 'util';

const readFileAsync = promisify(readFile);

const fileContents = {};

//todo maybe different case
readFileAsync('./file1.csv','utf8')
    .then((content)=>{
        fileContents['content1'] = content;
        return readFileAsync('./file2.csv','utf8'); 
    })
    .then((content)=>{
        fileContents['content2'] = content; 
    })
    .catch((error)=>{
        //error
    })
    .then(()=>{
        //fileContents
    })
```

------------------------

# Promise All



```javascript

import { readFile } from 'fs';
import { promisify } from 'util';

const readFileAsync = promisify(readFile);

Promise

```

------------------------


# Custom Promise


Promisify



------------------------

# Async/Await





```javascript

import { readFile } from 'fs';
import { promisify } from 'util';

const readFileAsync = promisify(readFile);

async function main(){
    try{
        const content1 = await readFileAsync('./file1.csv','utf8');
        const content2 = await readFileAsync('./file2.csv','utf8');
        
        //content1, content2

    }catch(error){
        //error
    }
}

main();
```


~~~


------------------------