// load core
const express = require('express');
const app = express();

// load modules
const datetime = require('./modules/datetime');

// load config
const port = process.env.PORT || 3000;
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.send('Hello from Node.js!');
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
    console.log(`Current time: ${datetime.currentTime()}`)
});
