const mongoose = require('mongoose')

const serviceSchema = mongoose.Schema ({
    make: String,
    model: String,
    Year: Number,
    needService: {type: Boolean, default: true}
},{timestamps: true}


)

const Service = mongoose.model('Service', serviceSchema)
module.exports = Service