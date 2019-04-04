import { Observable } from 'https://dev.jspm.io/rxjs@6/_esm2015';

function createFrames(element) {
    return Observable.create((observer) => {
        element.addEventListener('pointermove', (event) => {
            observer.next({ x: event.offsetX, y: event.offsetY });
        });
    });
}

const sceneElement = document.getElementById('scene2');
var ctx = sceneElement.getContext('2d');
ctx.lineWidth = 10;
ctx.lineCap = 'round';
ctx.strokeStyle = 'white';

let lastFrame = null;
createFrames(sceneElement).subscribe((frame) => {
    if (lastFrame) {
        ctx.beginPath();
        ctx.moveTo(lastFrame.x, lastFrame.y);
        ctx.lineTo(frame.x, frame.y);
        ctx.stroke();
    }
    lastFrame = frame;
});
