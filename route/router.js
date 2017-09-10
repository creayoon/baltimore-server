const express = require('express');
const route = express.Router();
const user = require('../controller/user');
const auth = require('../auth/auth');


// user에 auth 붙임
route.route('/user')
    .post(user.createUser)
    .get(auth.isBasicAuthenticated, user.readUser)
    .put(auth.isBasicAuthenticated, user.updateUser)
    .delete(auth.isBasicAuthenticated, user.deleteUser);

// route.route('/user')
//     .get((req, res) => {
//         console.log(req);
//     });

route.route('/test')
    .get((req, res) => {
        console.log('test req', req); // {}
        console.log('test query', req.query); // {}
        res.send('1 req.query');
    })
    .post((req, res) => {
        console.log('test body', req.body); // undefined
        res.send('2 req.body');
    })

// route.route('/test/:id')
//     .get((req, res) => {
//         console.log(req);
//         res.send('ok 2');
//     });




// init test
// route.get('/', (err, res) => {
//     if (err) console.log(err);
//     else
//         console.log(res);
//         res.send('welcome');
// });

module.exports = route;
