const mongoose = require('mongoose');

const messagesSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    }, 
    message: {
        type: String,
        default: '',
        trim: true
    }
});

const messagesModel = mongoose.model("Message", messagesSchema);

module.exports = messagesModel;