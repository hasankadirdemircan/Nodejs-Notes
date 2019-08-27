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
      maxlength: [20, '{PATH} alanı ({VALUE}), ({MAXLENGTH}) karakterden kucuk olmali.'], //20 karakterden fazla girilemez. ikinci parametre hata mesajıdır.
      minlength: [2, '{PATH} alanı ({VALUE}), ({MINKENGTH}) karakterden kucuk olmali.'] //20 karakterden fazla girilemez. ikinci parametre hata mesajıdır.
     // unique:true
    },

    year: {
      type: Number,
      max: 2000,
      min: 1300
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
