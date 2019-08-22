//model sinifi.

//mongoose dahil ettik.
const mongoose = require('mongoose');
//schema olusturmak icin.
const Schema = mongoose.Schema;

const BookSchema = new Schema({
    title: String
});

module.exports = mongoose.model('book', BookSchema);
