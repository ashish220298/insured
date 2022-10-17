var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var userAccountSchema = new Schema({
    AccountName: {
        type: String,
        Required: 'Agent name cannot be left blank.'
    }
});
module.exports = mongoose.model('UserAccounts', userAccountSchema);