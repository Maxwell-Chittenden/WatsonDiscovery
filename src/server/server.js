const express = require('express')
const app = express()
const cors = require('cors')
const port = 3000
const api = require('./api')


app.use(cors())

var test = { "data": "Hello World" }

app.get('/', (req, res) => {
  api.apiTest()
    .then(response => {
      console.log("==========================================================================")
      console.log(JSON.stringify(response, null, 2));
      res.json({ "data" : response.headers.server })
    });
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})