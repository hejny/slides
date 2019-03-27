<!-- $theme: default -->
<!-- --$size: 16:9 -->
<!-- page_number: true -->

# Jak tvořit hry na webu?

Pavol Hejný
<!-- *footer: Barcamp Hradec Králové | 14.10.2017 -->

<!--
Ukážu vám, jakým způsobem můžete začít tvořit hru, která poběží přímo ve webovém prohlížeči. Jaké frameworky a nástroje využít. Jak co nejefektivněji vykreslovat 2D nebo 3D grafiku na webu a no co si dát pozor.

Budu mluvit více z technologické stránky. Trochu opomenu herní design a grafiku.
-->

------------------------------------------------
# Web vs. Desktop

## Výhody:
+ Přenositelnost (URL)

## Problémy
- Výkon
- Místo v uložišti prohlížeče
- "Seamfull"


### Další možnosti:
- Unity, (Flash, Java)

------------------------------------------------
# Browser APIs
<!--
Problémy postupně mizí, výhody zůstávají (a jsou stále důležitější).
-->
- WebGL
- Pointer Lock API
- Fullscreen API
- WebWorkers
- WebSockets
- Messages
- Polyfill Hand.js

------------------------------------------------
# Canvas
```html
<canvas id="scene"></canvas>
```

```javascript
const sceneCanvas = window.document.getElementById('scene');
const ctx = canvas.getContext("2d");

ctx.fillStyle = '#ff0000';
ctx.beginPath();
ctx.arc(10,10, 5, 0, Math.PI * 2, true);
ctx.closePath();
ctx.fill();
```

------------------------------------------------
# 2D vs. 3D
- **2D CanvasRenderingContext2D:** Matter.js 
- **3D WebGl:** Babylon.js, Three.js, A-Frame

Další možnosti:
- 2D pomocí WebGL
- isometrie

------------------------------------------------
# UI (Canvas vs. html)
- React & MobX

```javascript
export default class UIDataModel {
    @observable health = 100;
    @observable energy = 50;
}
```
<!--:{uiDataModel:UIDataModel}-->
```javascript
export default observer(({uiDataModel})=>{
    return (
        <div className="counters">
            <div className="health">
                {uiDataModel.health.toString()}
            </div>
            <div className="energy">
                {uiDataModel.energy.toString()}
            </div>
        </div>
    );
});
```

------------------------------------------------
# Fyzika
- Pouze gravitace vs. vše se vším
- Cannon.js, Oimo.js
- Binding např. pro Babylon.js

------------------------------------------------
# Realtime (vs. tahové)
- drawLoop
- requestAnimationFrame(cb) vs. setInterval(cb,ms)
- performance.now()

```javascript
function drawLoop(){
	//update(...);
	//render(...);	
	requestAnimationFrame(drawLoop);
}

requestAnimationFrame(drawLoop);
```

------------------------------------------------
# Multiplayer

- **WebSockets**
- Pouze ukládání výsledků na server

------------------------------------------------
# Ukázka Babylon.js
## Scéna
```javascript
const scene = new BABYLON.Scene(engine);
const camera = new BABYLON.FreeCamera(
  'camera1', 
  new BABYLON.Vector3(0, 5, -10), 
  scene
);
camera.attachControl(canvas, true);
camera.setTarget(BABYLON.Vector3.Zero());
const light = new BABYLON.HemisphericLight(
  'light1',
  new BABYLON.Vector3(0, 1, 0),
  scene
);
scene.enablePhysics(BABYLON.Vector3.Zero());
```
---
## "Planeta"
```javascript
for(let z=-2;z<=2;z++){
  for(let y=0;y<5;y++){
    for(let x=-2;x<=2;x++){
      const boxMesh = BABYLON.Mesh.CreateBox(
        'box',
        0.2,
        scene
      );
      boxMesh.position = new BABYLON.Vector3(
        x*.2,
        (y+.5)*.2,
        z*.2
      );
      boxMesh.physicsImpostor = new BABYLON.PhysicsImpostor(
        boxMesh,
        BABYLON.PhysicsImpostor.BoxImpostor,
        { mass: 1, restitution: 0.3 },
        scene
      );
    }
  }
}
```
---
## Asteroid
```javascript
const asteroidMesh = BABYLON.Mesh.CreateSphere(
  'asteroid', 
  16,
  0.33,
  scene
);
asteroidMesh.position = new BABYLON.Vector3(0,-10,0);
asteroidMesh.physicsImpostor = new BABYLON.PhysicsImpostor(
  asteroidMesh,
  BABYLON.PhysicsImpostor.SphereImpostor,
  { mass: 100, restitution: 0.3 },
  scene
);
asteroidMesh.physicsImpostor.setLinearVelocity(
  asteroidMesh.position.scale(-.2)
);
```
https://www.babylonjs-playground.com/#DCR6ZG#5
  
<!--
# Ukázka bez frameworku
```javascript

```
-->
------------------------------------------------
# Děkuji za pozornost

- https://www.babylonjs-playground.com/#DCR6ZG#5
- misc.pavolhejny.com/barcamp
- https://www.itnetwork.cz/vytvor-si-vlastni-webovou-hru/
- PavolHejny.com
