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
    date: { type: Date, default: Date.now },
    imageLink: {
        type: String,
        required: false,
    },
    urlLink: {
        type: String,
        required: false,
    },
})

const Book = mongoose.model('Book', bookSchema);

module.exports = Book