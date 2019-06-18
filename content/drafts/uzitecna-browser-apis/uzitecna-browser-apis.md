# Užitečná Browser APIs
## [Pavol Hejný](https://www.pavolhejny.com/)



![](https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=https://www.pavolhejny.com/uzitecna-browser-apis)

https://www.pavolhejny.com/uzitecna-browser-apis


<footer>2018-10-07 | LinuxDays </footer>

---

# Storages
![](https://static1.squarespace.com/static/54d696e5e4b05ca7b54cff5c/t/578e12d44402437e78868035/1468928739804/Cloud+Storage?format=1024w)


---

# LocalStorage
*Web Storage API*

```javascript
localStorage.setItem('event', 'LinuxDays');
const item = localStorage.getItem('event');
localStorage.removeItem('event');
```

---

# SessionStorage
*Web Storage API*

```javascript
sessionStorage.setItem('event', 'LinuxDays');
const item = sessionStorage.getItem('event');
sessionStorage.removeItem('event');
```

---

# IndexedDB

``` javascript
const request = indexedDB.open("events");

request.onsuccess = ()=>{
    const db = request.result;

    const conferencesStore = db.createObjectStore("conferences");
    conferencesStore.createIndex("by_name", "name", {unique: true});
    conferencesStore.createIndex("by_rating", "rating");

    conferencesStore.put({name: "Linux Days", rating: 10});
    conferencesStore.put({name: "OpenAlt", rating: 10});
};
```

---

# Dexie.js


```javascript
const db = new Dexie('Database');

db.version(1).stores({
    conferences: `++id, name, rating`
});
```

```javascript
await db.conferences.add({
    name: 'LinuxDays 2018',
    rating: 10,
    icon: await getBlob('tux.png')
});
```


```javascript
await db.conferences
		.where('rating')
		.above(8)
		.toArray();
```
---

# Frameworks

- Dexie.js
- ZangoDB
- PouchDB *(similar to CouchDB)*
- jsStore

---

# Drop, FileReader

```html
 <div id="dropZone">Drag&Drop some files.</div>
```

```javascript
const dropZone = document.getElementById('dropZone');

dropZone.addEventListener('drop', (event)=>{
    event.stopPropagation();
    event.preventDefault();
    //event.dataTransfer.files
});
```

---

# Drop, FileReader

```javascript
//...
dropZone.addEventListener('drop', (event)=>{
    event.stopPropagation();
    event.preventDefault();
    for (const file of Array.from(event.dataTransfer.files)) {
        if (file.type.match(/image.*/)) {
            //...
        }
    }
});
```

---

# Drop, FileReader

```javascript
//...
dropZone.addEventListener('drop', (event)=>{
    event.stopPropagation();
    event.preventDefault();
    for (const file of Array.from(event.dataTransfer.files)) {
        if (file.type.match(/image.*/)) {

            const reader = new FileReader();

            reader.onload = (event)=>{
    
                const img = document.createElement('IMG');
                img.src= event.target.result;
                document.body.appendChild(img);
            }

            reader.readAsDataURL(file); 
        }
    }
});
```

---


# WebWorkers

```javascript
const worker = new Worker('/worker.js');

worker.postMessage({...});

worker.onmessage = (event)=>{
  //event.data
}
```

## worker.js

```javascript
onmessage = (event)=>{
    //event.data
    postMessage({...});
}
```

---

## index.js

```javascript
worker.terminate();
```

## worker.js

```javascrpit
importScripts('foo.js');
```

```javascript
close();
```

---

# Real-time apps
*(Push technologies)*

- Heartbeat
- Long polling 
- **WebSockets**

---

# WebSockets

```javascript

const socket = new WebSocket('wss://www.linuxdays.cz/');

socket.addEventListener('open', ()=>{
    socket.send('Hello from OpenAlt!');
});

socket.addEventListener('message', (event)=>{
    //event.data
});

socket.addEventListener('close', ()=>{
});
```
---

# Socket.io


```javascript
const socket = io().listen(/*...*/);

socket.on('message', function(message){
    //...
});

function sendMessage(message){
    socket.emit('message',message);
});
```

---

# Canvas

```html
 <canvas id="scene" width="256" height="42"></canvas>
```

* https://github.com/hejny/sample-js-game/

---

```javascript
const scene = window.document.getElementById('scene');
const ctx = scene.getContext('2d');

ctx.beginPath();
ctx.arc(33, 33, 60, 0, Math.PI * 2, true);
ctx.closePath();
ctx.fillStyle = '#906090';
ctx.fill();
```

---

```javascript
class Ball{

    constructor(x,y){
        this.x=x;
        this.y=y;
    }

    render(ctx){
        ctx.beginPath();
        ctx.arc(this.x, this.y, 60, 0, Math.PI * 2, true);
        ctx.closePath();
        ctx.fillStyle = '#906090';
        ctx.fill();
    }

}

const scene = window.document.getElementById('scene');
const ctx = scene.getContext('2d');

const ball = new Ball(33,33);
ball.render(ctx);
```

---

```javascript
//...

const scene = document.getElementById('scene');
const ctx = scene.getContext('2d');

const ball = new Ball(33,33);

function loop() {
    ball.x++;
    ball.render();
    requestAnimationFrame(loop);
}
requestAnimationFrame(loop);
```

---

```javascript
//...

const scene = document.getElementById('scene');
const ctx = scene.getContext('2d');

const ball = new Ball(33,33);

let timeLast = null;
function loop(time) {
    if (timeLast) ball.x += (time - timeLast) / 1000;
    timeLast = time;
    ball.render();
    requestAnimationFrame(loop);
}
requestAnimationFrame(loop);
```

---

# WebGl, WebVR

```javascript
const scene = document.getElementById('scene');
const ctx = scene.getContext('webgl');
```

---

# BABYLON.js
codesample:js:phejny/1bqwgsfo

---

# A-Frame

codesample:html:phejny/n2Le0za8/

---

# Frameworks

- Babylon.js
- Three.js
- A-Frame

---

#WebVR

- Helmet *( WebVR )*
- Controllers *( GamepadAPI )*

---

# Pointer lock API

```javascript
const scene = document.getElementById('scene');

document.addEventListener('pointerlockchange',()=>{
    if(document.pointerLockElement === scene) {
        //locked
    } else {
        //unlocked
    }
});

scene.requestPointerLock();
```

---

## Díky za pozornost!

![](https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=https://www.pavolhejny.com/uzitecna-browser-apis)

https://www.pavolhejny.com/uzitecna-browser-apis

https://github.com/hejny/sample-js-game/ *← 2D canvas*

https://hejny.github.io/sample-js-game/
