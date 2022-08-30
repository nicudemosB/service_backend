const express = require('express');
const mongoose = require('mongoose');
const Service = require('./models/service');
const cors = require('cors')
const app = express();
const db = mongoose.connection;
require('dotenv').config();


// Connect to Mongo
const PORT = process.env.PORT
const MONGODB_URI = process.env.MONGODB_URI;
mongoose.connect(MONGODB_URI)

// Error / success
db.on('error', (err) => console.log(err.message + ' is Mongod not running?'));
db.on('connected', () => console.log('mongo connected: ', MONGODB_URI));
db.on('disconnected', () => console.log('mongo disconnected'));

app.use(cors())
app.use(express.json())

app.post('/service', (req, res) => {
    Service.create(req.body, (err, createdService) => {
        res.json(createdService)
        
    })
})

app.get('/service', (req, res) => {
    Service.find({}, (err, foundService) => {
        res.json(foundService)
    })
})

app.delete('/service/:id', (req, res) => {
    Service.findByIdAndRemove(req.params.id, (err, deletedService) => {
        res.json(deletedService)
    })
})

app.put('/service/:id', (req, res) => {
    Service.findByIdAndUpdate(req.params.id, req.body,
        {new:true}, (err, updatedService) => {
            res.json(updatedService)
        })
})
app.listen(PORT, () => console.log('Listening on port:', PORT));
