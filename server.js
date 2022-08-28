const MONGODB_URI  = process.env.MONGODB_URI 

const mongoose = require('mongoose')
const cors = require('cors')
const Service = require('./models/service')
const { application } = require('express')

const app = express()

app.use(express.json())
app.use(cors())


// Connect to Mongo
mongoose.connect(MONGODB_URI, () => {a;
    console.log('whatever')
})

// Error / success
db.on('error', (err) => console.log(err.message + ' is Mongod not running?'));
db.on('connected', () => console.log('mongo connected: ', MONGODB_URI));
db.on('disconnected', () => console.log('mongo disconnected'));

mongoose.connect('mongodb://127.0.0.1:27017/service')
mongoose.connection.once('open', () => {
    console.log('connected to mongod...');
})

application.listen(3000, () => {
    console.log(('listening...'));
})