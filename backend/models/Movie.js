const mongoose = require('mongoose');

const MovieSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    duration: {
        type: String,
        required: true
    },
    description: {
        type: String,
    },
    unitPrice: {
        type: Number,
        required: true
    },
    tickets: {
        type: Number,
        required: true
    },
    file: {
        type: String,
    },
    category: {
        type: String,
        required: true
    },
    language: {
        type: String,
    },
    showTimings: {
        type: [String],
    },
    theatre: {
        type: String,
    }
});

module.exports = mongoose.model('Movie', MovieSchema);
