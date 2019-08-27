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
const UserSchema = new Schema({
    fullname: {
      type: String,
      required: true,
      unique:true
    },
    age: String
});

module.exports = mongoose.model('user', UserSchema);
