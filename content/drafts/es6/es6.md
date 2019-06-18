# How to build a HUGE app with ES6?

## (basics)
## [Pavol Hejný](https://www.pavolhejny.com/)

https://www.pavolhejny.com/es6


<footer>2018-06-29 ITNetwork </footer>

---

# Const vs. let ( vs. var )

```javascript
const a = 1;
let b = 2;
b = 3;
```

```javascript
var a = 1;
var a = 2;
var a = 3;
```

---

# Object mutations

```javascript
const b = {
    a: 1,
    b: 2,
};
b.a = 3;
```

---

# String templates

```javascript
const name = 'Pavol Hejný';
const mail = 'me@pavolhejny.com';
const text = `
My name is ${name}.
And my mail is ${mail}.
`;
```

---

# Arrow functions

```javascript
function ahoj(a = 0, b = 0) {
    return a + b;
}

const ahoj = (a = 0, b = 0) => {
    return a + b;
};

doSomeStuff(() => {
    //...
});
```

---

# Sync stuff

```javascript
function main() {
    const input = 2 * 3 * 5 * 7 * 11 * 13;

    try {
        const primes = factorize(input);
        element.innerHTML = `${input} = ${primes.join(' * ')}`;
    } catch (error) {
        logError(error);
    }
}
```

---

# Async stuff (old and stupid)

```javascript
function main() {
    element.innerHTML = 'Computing..';

    const input = 2 * 3 * 5 * 7 * 11 * 13;
    factorize(
        input,
        (error) => {
            logError(error);
        },
        (primes) => {
            element.innerHTML = `${input} = ${primes.join(' * ')}`;
        },
    );
}
```

---

# Async stuff with Promise

```javascript
function main() {
    element.innerHTML = 'Computing..';

    const input = 2 * 3 * 5 * 7 * 11 * 13;
    factorize(input)
        .then((primes) => {
            element.innerHTML = `${input} = ${primes.join(' * ')}`;
        })
        .catch((error) => {
            logError(error);
        });
}
```

---

# Async stuff with Promise and async/await

```javascript
async function main() {
    const input = 2 * 3 * 5 * 7 * 11 * 13;

    try {
        const primes = await factorize(input);
        element.innerHTML = `${input} = ${primes.join(' * ')}`;
    } catch (error) {
        logError(error);
    }
}
```

---

# Lot of async stuff with Promise and async/await

```javascript
async function main() {
    try {
        const controller = await getController();
        const modelObj = await getModel(controller);
        const modelShapes = await convertToShapes(model3DObj);
    } catch (error) {
        logError(error);
    }
}
```

---

# Lot of async stuff with Promise

```javascript
function main() {
    getController()
        .then(getModel)
        .then(convertToShapes)
        .then((modelShapes) => {
            //...
        })
        .catch((error) => {
            logError(error);
        });
}
```

---

# Lot of async stuff with callback hell

```javascript
function main() {
    getController(
        (error) => {
            logError(error);
        },
        (controller) => {
            getModel(
                controller,
                (error) => {
                    logError(error);
                },
                (modelObj) => {
                    convertToShapes(
                        modelObj,
                        (error) => {
                            logError(error);
                        },
                        (modelShapes) => {
                            //...
                        },
                    );
                },
            );
        },
    );
}
```

---

# Multiple .js file project

```html
<script src="./math/factorize.js"></script>
<script src="./main.js"></script>
<script>
    main();
</script>
```

---

# Modules Export/Import

```javascript
import { factorize } from './math/factorize.js';

export default async function main() {
    const input = 2 * 3 * 5 * 7 * 11 * 13;
    try {
        const primes = await factorize(input);
        element.innerHTML = `${input} = ${primes.join(' * ')}`;
    } catch (error) {
        logError(error);
    }
}
```

---

# Modules Export/Import

```html
<script type="module">
    import main from './main.js';
    main();
</script>
```

---

# Bundlers / Transpilers / Boilerplate&nbsp;generators

---

# To be continued...
