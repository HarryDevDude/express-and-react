require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const app = express()
const PORT = 3000
const Fruit = require('./models/Fruit')

// ===== Connection to Database =====
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
mongoose.connection.once('open', () => console.log('Connected to Mongo'))

// Setup Engine
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())

// ===== Middleware =====
app.use(express.urlencoded({extended:false}));
// Use Express middleware to parse JSON.
app.use(express.json())
app.use((req, res, next) => {
    // console.log('I run for all the routes.')
    next()
})

// ===== Routes =====

// Index
app.get('/fruits', (req, res) => {
  // Query model to return all fruits
  Fruit.find({}, (err, allFruits) => {
      res.render('Index', {fruits: allFruits})
  })
})

// New
app.get('/fruits/new', (req, res) => {
    res.render('New');
});

// Show
app.get('/fruits/:id', (req, res) => {
    Fruit.findById(req.params.id, (err, foundFruit) => {
    res.render('Show', {fruit: foundFruit})
    })
  // This will display our Show component in the browser. Node will automatically look for a Show file inside the views folder.
})

// Create
app.post('/fruits', (req, res) => {
    req.body.readyToEat === 'on'
    ?
    req.body.readyToEat = true
    :
    req.body.readyToEat = false
    // console.log('BEFORE', req.body.name)
    // req.body.readyToEat = req.body.readyToEat === 'on' ? true : false;
    // req.body.readyToEat = req.body.readyToEat ? true : false;


    // Below line mimics working with a database
    // fruits.push(req.body)
    console.log('req.body:', req.body)

    // Create 1st arg: the actual object we want to insert inside our database
    // Callback 1st arg: error
    // Callback 2nd arg: the newly created object

    Fruit.create(req.body, (err, createdFruit) => {
        // console.log(createdFruit)
        // res.send(createdFruit)
        res.redirect('/fruits')
    })
    
})

// Returns giant object with info and methods we can use
// Focus on Query object
// console.dir(Fruit)

app.listen(PORT, () => console.log(`Listening to port ${PORT}`))