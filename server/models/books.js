/*
         File Name: books.js
     Author's Name: Ho Yin Wong
         StudentID: 301290744
      Web App name: Favourite Book List
*/

let mongoose = require('mongoose');

// create a model class
let Book = mongoose.Schema({
    Title: String,
    Description: String,
    Price: Number,
    Author: String,
    Genre: String
},
{
  collection: "books"
});

module.exports = mongoose.model('Book', Book);
