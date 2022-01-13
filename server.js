const express = require('express');
const bodyParser= require('body-parser')
const app = express();
const MongoClient = require('mongodb').MongoClient



MongoClient.connect("mongodb+srv://sathish:msk@msk.sxiew.mongodb.net/backend-dev?retryWrites=true&w=majority", { useUnifiedTopology: true })
.then(client => {
  console.log('Connected to Database')
  const db = client.db('star-wars-quotes')
  const quotesCollection = db.collection('quotes')



app.use(bodyParser.urlencoded({ extended: true }))
app.listen(3000, function() {
    console.log('listening on 3000')
  })
  
  app.get('/', (req, res) => {
      db.collection('quotes').find().toArray()
        .then(results => {
            res.render('index.ejs', { quotes: results})
        })
        .catch(error => console.error(error))
        
      /*const cursor = db.collection('quotes').find()
      console.log(cursor)*/

    // res.sendFile(__dirname + '/index.html')
    
  })

  app.post('/quotes', (req, res) => {
    quotesCollection.insertOne(req.body)
      .then(result => {
        res.redirect('/')
      })
      .catch(error => console.error(error))
  })
})
  


