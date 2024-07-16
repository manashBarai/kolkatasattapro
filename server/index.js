const express = require('express')
const app = express()
const cors = require("cors")
require("./db")
require("dotenv").config()
const port = process.env.PORT
app.use(express.json())
app.use(cors())

app.get('/', (req, res) => res.send('Hello World!'))

app.use('/api/v1/user', require('./route/user'))
app.use('/api/v1/freeAd', require('./route/freeAd'))
app.use('/api/v1/notice', require('./route/notice'))
app.use('/api/v1/fact', require('./route/fact'))
app.use('/api/v1/movement', require('./route/movement'))
app.use('/api/v1/result', require('./route/result'))
app.use('/api/v1/importantNote', require('./route/importantNote'))
app.use('/api/v1/importantFact', require('./route/importantFactSatta'))
app.use('/api/v1/alterNative', require('./route/alterNativeSatta'))



app.listen(port, () => console.log(`Example app listening on port ${port}!`)) 