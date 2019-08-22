//model sinifi.

//mongoose dahil ettik.
const mongoose = require('mongoose');
//schema olusturmak icin.
const Schema = mongoose.Schema;

const BookSchema = new Schema({
    title: String,
    published: Boolean,
    //birden fazla yorum olabilir,
    //array tutuyoruz.
    //array yaptigimizda her obje icin
    //mongo db kendisi id atar.
    comments: [{message: String}],
    meta: {
      votes: Number,
      favs: Number
    }
});

module.exports = mongoose.model('book', BookSchema);
