var express = require('express');
var app = express();

app.use(express.static('./public'));
app.use(express.static('./node_modules/bootstrap/dist/css'));
app.use(express.static('./node_modules/react/dist'));
app.use(express.static('./node_modules/react-dom/dist'));
app.listen(3000);
console.log('running at http://localhost:3000');
