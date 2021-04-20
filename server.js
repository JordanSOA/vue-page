const express = require('express')
const cors = require('cors')

const app = express()
const port = process.env.PORT || 3000
const path = __dirname + '/client/';

app.use(express.static(path));
app.use(express.json())
app.use(cors())
app.use(express.urlencoded({ extended: false }))

app.get('/', (req, res) => {
    res.sendFile(path+"index.html");
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})