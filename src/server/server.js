const express = require('express')
const app = express()
const cors = require('cors')
const port = 3000
const api = require('./api')

app.use(cors())

app.get('/', (req, res) => {
  console.log(req.query)
  api.queryData(req.query.value)
    .then(response => {
      console.log("Sucess");
      res.json(response)
    });
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
