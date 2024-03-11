const express = require('express');
const app = express();
require('dotenv').config();

const port = process.env.PORT || 3001;

app.get('/', (req, res) => {
    res.write('<h1>Hello from Home Page</h1>'); 
});

app.listen(port, () => {
    console.log(`listening to port ${port}`); 
});