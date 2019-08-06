require('custom-env').env(true)
require('./models/User')
require('./services/passport')
const { MONGO_URI: mongoUri } = process.env
const express = require('express')
const mongoose = require('mongoose')
const app = express()

mongoose.connect(mongoUri)

require('./routes/auth')(app)


const PORT = process.env.PORT || 4000
app.listen(PORT)