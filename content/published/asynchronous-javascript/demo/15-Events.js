const sceneElement = document.getElementById('scene1');
console.log('sceneElement', sceneElement);
var ctx = sceneElement.getContext('2d');
ctx.lineWidth = 10;
ctx.lineCap = 'round';
ctx.strokeStyle = 'white';

let lastFrame = null;
sceneElement.addEventListener('pointermove', (event) => {
    const frame = { x: event.offsetX, y: event.offsetY };
    console.log('frame', frame);

    if (lastFrame) {
        ctx.beginPath();
        ctx.moveTo(lastFrame.x, lastFrame.y);
        ctx.lineTo(frame.x, frame.y);
        ctx.stroke();
    }
    lastFrame = frame;
});
