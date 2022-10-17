var mongoose = require('mongoose');

var Schema = mongoose.Schema;
var User = mongoose.model('Users');
var PolicyCarrier = mongoose.model('PolicyCarriers');
var PolicyCategory = mongoose.model('PolicyCategorys');

var policyinfoschema = new Schema({

    PolicyStartDate: {
        type: String
    },

    PolicyEndDate: {
        type: String
    },

    PolicyMode: {
        type: String
    },

    PolicyNumber: {
        type: String
    },
    PolicyType: {
        type: String
    },
    users: [{
        type: Schema.Types.ObjectId,
        ref: 'User'
    }],
    category: [{
        type: Schema.Types.ObjectId,
        ref: 'PolicyCategory'
    }],
    company: [{
        type: Schema.Types.ObjectId,
        ref: 'PolicyCarrier'
    }]
});

module.exports = mongoose.model('PolicyInfos', policyinfoschema);