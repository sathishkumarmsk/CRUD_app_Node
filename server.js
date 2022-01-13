const express = require('express');
const res = require('express/lib/response');
const MongoClient = require('mongodb').MongoClient

const bodyParser = require('body-parser')
const app = express();

MongoClient.connect("mongodb+srv://sathish:msk@msk.sxiew.mongodb.net/backend-dev?retryWrites=true&w=majority", { useUnifiedTopology: true })
.then(client => {
  console.log('Connected to Database')
  const db = client.db('star-wars-quotes')

  app.use(bodyParser.urlencoded({ extended: true }))

  app.get('/', (req, res) => {/*...*/ })

  app.post('/quotes', (req,res) => {
  console.log(req.body)
  } )

  app.get('/', (req, res) => {
      res.sendFile(__dirname + '/index.html')
  })
})
.catch(console.error)

app.listen(3000, function() {
    console.log('listening on 3000')
})