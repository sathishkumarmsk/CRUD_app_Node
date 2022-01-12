const express = require('express');
const res = require('express/lib/response');
const app = express();


app.listen(3000, function() {
    console.log('listening on 3000')
})

/*
app.get('/',function(req, res) {
    res.send('Hello World')
})
*/
app.get('/', (req, res) => {
    res.send('Hello World')
})