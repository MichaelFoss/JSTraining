const express = require('express');

const app = express();

// Define docroot
app.use(express.static(__dirname + '/../www'));

// Define views folder
app.set('views', __dirname + '/views');

// Route the default request
app.get('/', (req, res) => {
    res.render('index');
});

// Listen at port 3000
app.listen(3000);