const express = require('express');

var cors = require('cors')
var app = express()

app.use(cors())

app.get("/", (req, res) => {
  res.send(" Go to translate")
})

app.get('/translate/yoda.json', (req, res) => {
  console.log(req.query.text)
  res.json({
    "success": {
        "total": 1
    },
    "contents": {
        "translated": "Testing,  you are",
        "text": req.query.text || "text missing",
        "translation": "yoda"
    }
})
});

app.listen(3000, () => {
  console.log('server started');
});
