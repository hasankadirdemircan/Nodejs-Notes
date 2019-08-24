//model sinifi.

//mongoose dahil ettik.
const mongoose = require('mongoose');
//schema olusturmak icin.
const Schema = mongoose.Schema;

/**
 * type -> veri tipini belirtir.
 * default -> varsayilan degeri belirtir.
 * required -> olmazsa olmaz anlamina geliyor.
 * unique -> essiz alan.
 */
const BookSchema = new Schema({
    title: {
      type: String,
      required: true,
      unique:true
    },

    //birden fazla yorum olabilir,
    //array tutuyoruz.
    //array yaptigimizda her obje icin
    //mongo db kendisi id atar.
    comments: [{message: String}],
    meta: {
      votes: Number,
      favs: Number
    },
    published: {
      type: Boolean,
      default: false
    },
    publishedAt: {
      type: Date,
      default: Date.now
    }
});

module.exports = mongoose.model('book', BookSchema);
