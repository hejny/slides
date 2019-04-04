# Asynchronous JavaScript
[Pavol Hejný](https://www.pavolhejny.com/)

![](https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=https://talks.pavolhejny.com/?id=2019/001-asynchronous-javascript/asynchronous-javascript)

https://talks.pavolhejny.com/?id=2019/001-asynchronous-javascript/asynchronous-javascript

https://github.com/hejny/talks/tree/master/content/2019/001-asynchronous-javascript

<!--<footer>2018-10-07 | LinuxDays </footer>-->

------------------------

# Synchronous code

## PHP
```php
$content = file_get_content('file.csv');

print_r($content);
```

## Node.js
```javascript
import {readFileSync} from 'fs';

const content = readFileSync('file.csv', 'utf8');

console.log('content',content);
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
        console.error(error);
    }else{
        console.log('events',events);
    }
});
```

------------------------

# CPU vs. I/O

![](/content/2019/001-asynchronous-javascript/hdd.jpg)


------------------------

# API Calls

!import demo/01-Api-calls.js

------------------------

# Callbacks


!import demo/02-Callbacks.js


------------------------

# Error handling

!import demo/03-Error-handling.js


------------------------

# Callback error handling

!import demo/04-Callback-error-handling.js

------------------------

# Callback Hell

!import demo/05-Callback-Hell.js

------------------------

# Parallel

!import demo/06-Parallel.js

------------------------

# Promise creation


!import demo/08-Promise-creation.js --norun


------------------------

# Promise usage


!import demo/09-Promise-usage.js

-----

# Promise creation
Easy way in Node.js

```javascript
import { promisify } from 'util';

const apiQueryAsync = promisify(apiQuery);
```

------------------------

# Promise.all


!import demo/10-Promise-all.js


------------------------

# Async/Await

!import demo/11-Async-Await.js

------------------------

# Await Promise.all

*Same as deprecated await*

!import demo/12-Await-all.js


------------------------

# Generator
a simple showcase

!import demo/13-Generator-simple.js


------------------------

# Generator

!import demo/14-Generator-async.js

------------------------

# Events

!import demo/15-Events.js


------------------------

# Events

<canvas id="scene1" width="500" height="500" style="border: 2px solid white"></canvas>

------------------------


!import demo/16-RxJs-events.js


------------------------

# Events + RxJS


<canvas id="scene2" width="500" height="500" style="border: 2px solid white"></canvas>



------------------------

```javascript
import { TouchController } from 'touchcontroller';

var scene = document.getElementById('scene');
var ctx = scene.getContext('2d');
ctx.lineWidth = 10;
ctx.lineCap = "round";


var touchController = new TouchController.fromCanvas(scene);
touchController.touches.subscribe(function(touch){

    console.log(touch);

    var color = '#'+Math.floor(Math.random()*16777215).toString(16);
    var lastFrame = touch.firstFrame;

    touch.frames.subscribe(function(frame){
        ctx.strokeStyle = color;
        ctx.beginPath();
        ctx.moveTo(lastFrame.position.x,lastFrame.position.y);
        ctx.lineTo(frame.position.x,frame.position.y);
        ctx.stroke();
        lastFrame = frame;
    });

});
```

------------------------

# </🏁Asynchronous JavaScript>

![](https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=https://talks.pavolhejny.com/?id=2019/001-asynchronous-javascript/asynchronous-javascript)

https://talks.pavolhejny.com/?id=2019/001-asynchronous-javascript/asynchronous-javascript

https://github.com/hejny/talks/tree/master/content/2019/001-asynchronous-javascript

https://ponyfoo.com/articles/understanding-javascript-async-await

https://github.com/touchcontroller/touchcontroller