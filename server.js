const express = require('express');
const path = require('path')

var app = express()

app.use('/public', express.static(path.join(__dirname, '/public')));

app.get('/', (req, res) => {
    res.sendFile()
});

app.listen(3070, () => {
    console.log('Server started on port 3070');
});