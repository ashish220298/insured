var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var userSchema = new Schema({

    firstname: {
        type: String,
        Required: 'Product name cannot be left blank.'
    },

    Dob: {
        type: String,
        Required: 'Product price cannot be left blank.'
    },

    address: {
        type: String,
        Required: 'Product category cannot be left blank'
    },

    phoneNumber: {
        type: String
    },

    state: {
        type: String
    },
    zipCode:{
        type: String
    },

    email:{
        type: String
    },
     userType: {
         type: String
     }
});

module.exports = mongoose.model('Users', userSchema);