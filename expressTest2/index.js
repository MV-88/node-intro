const express = require('express');
const app = express();

app.use(() => {
    console.log('new request 2');
})

app.listen(8080, () => {
    console.log('listening on port 8080')
})