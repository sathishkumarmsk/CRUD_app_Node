const express = require('express');
const res = require('express/lib/response');

const bodyParser = require('body-parser')
const app = express();


app.listen(3000, function() {
    console.log('listening on 3000')
})

/*
app.get('/',function(req, res) {
    res.send('Hello World')
})
*/

/*
app.get('/', (req, res) => {
    res.send('Hello World')
})
*/

app.use(bodyParser.urlencoded({ extended: true }))

app.get('/', (req, res) => {/*...*/ })

app.post('/quotes', (req,res) => {
    console.log(req.body)
} )



app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})
 

app.post('/quotes', (req, res) => {
    console.log('Helloooo!')
})

