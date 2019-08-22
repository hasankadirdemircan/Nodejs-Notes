const express = require('express');
const router = express.Router();

// exports ettigimiz model sinifini import ediyoruz.
const Book = require('../models/Book');
/* GET users listing. */
router.get('/new', function(req, res, next) {
  const book = new Book({
    title: 'Test Node.JS'
  });

  //mongodb'ye kayit islemi gerceklestiriyoruz.
  //basarili olursa data json tipinde geri donduruyoruz.
  book.save((err, data)=>{
      if(err)
        console.log(err);
      res.json(data);
  })
});

module.exports = router;
