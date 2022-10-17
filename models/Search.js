var mongoose = require('mongoose');
var Schema = mongoose.Schema;

const searchSchema = new Schema({

    agents: [{
        type: Schema.Types.ObjectId,
        ref: 'Agent'
    }],
    users: [{
        type: Schema.Types.ObjectId,
        ref: 'User'
    }],

    usersaccounts: [{
        type: Schema.Types.ObjectId,
        ref: 'UserAccount'
    }],
    policycarrier: [{
        type: Schema.Types.ObjectId,
        ref: 'PolicyCarrier'
    }],
    policycategory: [{
        type: Schema.Types.ObjectId,
        ref: 'PolicyCategory'
    }],
}, {
    timestamps: true
});

mongoose.model('Search', searchSchema);