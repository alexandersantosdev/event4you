const mongoose = require('mongoose')
const URI = process.env.mongo_uri

const conn = mongoose.connect(URI)
    .then(sucess => console.log("Connected to database"))
    .catch(err => console.log(err))

module.exports = conn