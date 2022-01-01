const express = require('express')
const app = express()
const cors = require('cors')
require('./config/db')

app.use(express.json())
app.use(require('./routes/routes'))
app.use(cors())

const PORT = process.env.PORT || 3000

app.listen(PORT, () => console.log('server running and listening on port: ' + PORT))