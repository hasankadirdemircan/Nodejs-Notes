const express = require('express');
const router = express.Router();

// exports ettigimiz model sinifini import ediyoruz.
const Book = require('../models/Book');
/* GET post listing. */
//http://localhost:3000/books/new
router.post('/new', function(req, res, next) {
  const book = new Book({
    title: 'Üçüncü',
    published: false,
    comments: [
      {message: "harika."},
      {message:"tavsiye ederim."}
    ],
    meta: {
      votes: 10,
      favs: 98
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

router.get('/search/all', (req, res)=>{
  //find icerisine bos obje gonderdigimde tum kayit gelir.
  // 'comments' dedigimde sadece comments alanlari gelecektir.
  Book.find({ }, 'title comments', (err, data)=>{
      res.json(data);
  });
});

//tekil arama, sadece ilk buldugu kayidi doner.
//obje doner, array degil.
//findOne
router.get('/searchOne', (req, res)=>{
  Book.findOne({title: "JAVA"}, (err, data)=>{
    res.json(data);
  });
});

// id bazli arama.
//obje doner.
//findById
router.get('/searchById', (req, res)=>{
  Book.findById("5d61a5b9a39e3d2f36b1963e", (err, data)=>{
    res.json(data);
  });
});

//update
// published false olan alani true yap.
// yalnizca ilk buldugu kayidi gunceller, hepsini degil.
router.put('/updateOne', (req, res)=>{
  Book.update(
    {published: false},
    {published: true}, (err, data)=>{
      res.json(data);
    });
});

//multi keyword ile tum datalar uzerinde update yapmiş oluruz.
router.put('/updateMulti', (req, res)=>{
  Book.update(
    {published: false},
    {published: true},
    {multi: true}, (err, data)=>{
      res.json(data);
    });
});

//upsert keyword.
// eger published alani false olan bir data bulamazsa kendisi yeni bir kayıt ekler.
router.put('/updateSert', (req, res)=>{
  Book.update(
    {published: false},
    {published: true},
    {upsert: true}, (err, data)=>{
      res.json(data);
    });
});

// id bazli update yapma.
// findByIdAndUpdate
// ilk parametre update edilecek id
// ikinci parametre update edilecek alan ve yeni degeri.
// değiştirilecek alan obje içerisinde ise 'obje.temp' şeklinde yaparız.('meta.favs')
router.put('/updateById', (req, res)=>{
  Book.findByIdAndUpdate('5d62d951f5668e491c89c01b',
  {
    title: 'Yeni Title',
    'meta.favs': 4
  }, (err, data)=>{
    res.json(data);
  });
});

// Delete işlemleri.

/**
 * findOne() => remove
 * findOneAndRemove()
 * remove()
 */

 // sileceğimiz data ile ilgili bi işlem yapılacaksa kullanılabilir.
 router.delete('/remove', (req, res)=>{
   Book.findById('5d62d951f5668e491c89c01b', (err, book) =>{
     // bişeyler yapılabilir.
     book.remove((err, data)=>{
       res.json(data);
     });
   });
 });

 // bulunan ilk datayı siler.
 // findOneAndRemove
 router.delete('/findOneAndRemove', (req, res)=>{
   Book.findOneAndRemove({published: true}, (err, data)=>{
    res.json(data);
   });
 });

 // published true olan tüm kayıtları siler.
 router.delete('/removeAll', (req, res)=>{
  Book.remove({published: true}, (err, data)=>{
   res.json(data);
  });
});

//sıralama servisi.
// .sort icerisine hangi alana gore siralama yapmak istediğimizi yazıyoruz.
// Eger küçükten büyüğe sıralama yapmak için -> 1
// Büyükten küçüğe sıralamak için -> -1
router.get('/sort', (req, res)=>{
  Book.find({}, (err, data)=>{
    res.json(data);
  }).sort({'meta.favs': -1});
});
// .sort({'title':1}) -> A-Z siralar.
module.exports = router;
