const express = require('express');
const router = express.Router();

// exports ettigimiz model sinifini import ediyoruz.
const Book = require('../models/Book');
/* GET post listing. */
//http://localhost:3000/books/new
router.post('/new', function(req, res, next) {
  const book = new Book({
    title: 'JAVA',
    published: false,
    comments: [
      {message: "harika."},
      {message:"tavsiye ederim."}
    ],
    meta: {
      votes: 10,
      favs: 99
    }
  });

  //mongodb'ye kayit islemi gerceklestiriyoruz.
  //basarili olursa data json tipinde geri donduruyoruz.
  book.save((err, data)=>{
      if(err)
        console.log(err);
      res.json(data);
  })
});

//mongoDB'de arama islemi.
router.get('/search', (req, res)=>{
  //find icerisine aramak istedigim alanlari ekliyorum.
  // 'comments' dedigimde sadece comments alanlari gelecektir.
  Book.find({ published: false}, 'title comments', (err, data)=>{
      res.json(data);
  });
});

module.exports = router;
