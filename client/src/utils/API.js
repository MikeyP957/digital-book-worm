import axios from 'axios';
require('dotenv').config()

export default {
    //get all books
    getBooks:function () {
        return axios.get('/api/books');
    },
    //get one book with id
    getOneBook: function(id) {
        return axios.get('/api/books/' + id);
    },
    deleteBook: function(id) {
        return axios.delete('/api/books/' + id);
    },
    saveBook: function(bookData) {
        return axios.post('/api/books', bookData);
    },
    googleBook: function(query) {
        const key = 'AIzaSyDHaFXlZjbuxINwYBJiU_cSanGEYXU_Wag';
        const url = `https://www.googleapis.com/books/v1/volumes?q=`;
        
        return axios.get(`${url}${query}&key=${key}`);

    }



}