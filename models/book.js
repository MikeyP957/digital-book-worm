const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bookSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    authors: [String],
    description: {
        type: Text,
        required: false,
    },
    imageLink: {
        type: String,
        required: false,
    },
    urlLink: {
        type: String,
        required: false,
    },
})