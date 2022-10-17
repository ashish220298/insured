var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var agentSchema = new Schema({
    name: {
        type: String,
        Required: 'Agent name cannot be left blank.'
    }
});
module.exports = mongoose.model('Agents', agentSchema);