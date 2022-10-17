var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var policyCarrierSchema = new Schema({
    company_name: {
        type: String,
        Required: 'Agent name cannot be left blank.'
    }
});
module.exports = mongoose.model('PolicyCarriers', policyCarrierSchema);