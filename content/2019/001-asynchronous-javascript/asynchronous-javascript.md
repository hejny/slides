# Asynchronous Javascript


---


# Synchronous code

```php
$content = file_get_contents('./file.json');
//$content
```

```javascript
import {readFileSync} from 'fs';

const content = readFileSync('./file.json','utf8');
//content
```

---

# Callbacks


```javascript
import {readFile} from 'fs';


readFile(filename, 'utf8', (error, content)=>{
    if (error) throw error;
    //content
});
```


---

# Callback Hell



---

# Generator



---

# Promise



---

# Async/Await



---