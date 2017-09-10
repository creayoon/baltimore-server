var User = require('../models/user');


exports.createUser = function(req, res) {
    console.log('req body, ', req.body);

    let userName = req.body.userName;
    let password = req.body.password;

    // console.log('userName, password', userName, password);

    new User({userName: userName, password: password}).save((err, doc) => {
        if (doc) {
            console.log('user doc: ', doc);
            res.send('유저가 생성되었습니다');
        }
    })

    // res.send('create user');
};

exports.readUser = function(req, res) {
    res.send('read user');
};

exports.updateUser = function(req, res) {
    res.send('update user');
};

exports.deleteUser = function(req, res) {
    res.send('delete user');
};
