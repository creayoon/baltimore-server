const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
	userName: String,
	password: String
});


// db.users.find() // users: collections에 자동으로 s가 붙음
UserModel = mongoose.model("Users", UserSchema);
module.exports = UserModel;


