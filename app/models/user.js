var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var bcrypt = require('bcrypt-nodejs');
 
 
// set up a mongoose model
var UserSchema = new Schema({
  WorkId: {
        type: String,
        unique: true,
        required: true
    }/*,
  password: {
        type: String,
        required: true
    }*/
});
 
UserSchema.pre('save', function (next) {
    var user = this;
    if (this.isNew) {
/*        bcrypt.genSalt(10, function (err, salt) {
            if (err) {
                return next(err);
            }
            bcrypt.hash(user.password, salt,null, function (err, hash) {
                if (err) {
                    return next(err);
                }
                user.password = hash;
                next();
            });
        });
*/   

console.log("User inserted in databse...");
next();

 } else {
        return next();
    }
});
 /*
UserSchema.methods.comparePassword = function (passw, cb) {
    bcrypt.compare(passw, this.password, function (err, isMatch) {
        if (err) {
            return cb(err);
        }
        cb(null, isMatch);
    });
};*/
 
module.exports = mongoose.model('User', UserSchema);