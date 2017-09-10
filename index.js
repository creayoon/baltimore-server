const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const route = require('./route/router');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');


// mongod
mongoose.Promise = global.Promise; // from mongoose ver.4
mongoose.connect('mongodb://localhost:27017/Baltimore');



// route
app.use(route);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
// false: string or object
// true: any


app.listen(port, err => {
    if (err) console.log(err);
    else console.log('server run!');
});
