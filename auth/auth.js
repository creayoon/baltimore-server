const passport = require('passport');
const BasicStrategy = require('passport-http').BasicStrategy;

passport.use(new BasicStrategy((id, password, callback) => {
        if (id === 'zzzz' && password === 'zzzz') {
            return callback(null, id);
        } else {
            return callback(null, false);
        }
    }
));


exports.isBasicAuthenticated = passport.authenticate('basic', {sessioin: false});
