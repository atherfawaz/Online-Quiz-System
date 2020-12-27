const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },

    email: {
        type: String,
        required: true,
    },

    password: {
        type: String,
        required: true,
    },

    type:{
        type: Number,
        required: true,
    },

    classes:{
        type: [],
        default: []
    }
});

module.exports = mongoose.model('User', UserSchema);