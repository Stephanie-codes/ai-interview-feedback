const express = require('express')
const app = express()
const cors = require('cors')
const bodyParser = require('body-parser')

dotenv.config()
app.use(cors({
    origin: "http://localhost:3000/",
    credentials: true
}))
app.use(bodyParser.json())

const apiRouter = require('./api/api')
app.use('/api', apiRouter)  

app.use(express.static(path.join(__dirname, 'build')));
app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'))
})

app.listen({
    port: 3001
}, () => {
    console.log(`Your server is running on port 3001`)
})

module.exports = app
