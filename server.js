const express = require('express')  
const serveStatic = require('serve-static')
const serveIndex = require('serve-index')

const staticBasePath = './';

const app = express();

app.use(serveStatic(staticBasePath, {'index': false}))  
app.use(serveIndex(staticBasePath, {'icons': true}))  
app.listen(3000);

console.log(`Static server listening on port 3000.`);