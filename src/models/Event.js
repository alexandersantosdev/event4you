const mongoose = require('mongoose')

const EventSchema = mongoose.Schema({
    title: String,
    theme: String,
    to: [String],
    date: String,
    workload: Number,
    local: String,
    speakers: [String],
    active: Boolean,
}, {timestamps : true})

module.exports = mongoose.model('Event', EventSchema)