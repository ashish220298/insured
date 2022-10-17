var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var policyCategorySchema = new Schema({

    policyCategory: {
        type: String,
        Required: 'Product name cannot be left blank.'
    }
});

module.exports = mongoose.model('PolicyCategorys', policyCategorySchema);