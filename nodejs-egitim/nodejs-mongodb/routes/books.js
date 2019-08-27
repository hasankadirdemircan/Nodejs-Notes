const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();

// exports ettigimiz model sinifini import ediyoruz.
const Book = require('../models/Book');
const User = require('../models/User');
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

// limit ve skip kavramları
// limit -> belli sayıda eleman ver.
// skip -> belli elemanları geç sonrasını ver.
router.get('/limit', (req, res)=>{
  Book.find({}, (err, data)=>{
    res.json(data);
  }).limit(2);
});

// ikinci kayıttan sonra bir tane kayıt göster.
// yani üçüncü kayıt.
router.get('/skip', (req, res)=>{
  Book.find({}, (err, data)=>{
    res.json(data);
  }).skip(2);
});

// aggregate -> kümeleme
// bir yazarın yazdığı kitaplardan 100 den fazla beğeni aldığı kitapları getir gibi.
// $match -> eşleşenleri getirmek için.
// $group -> istedigimiz bilgiye göre gruplayabiliriz.(kategori)
router.get('/aggregate', (req, res)=>{
  Book.aggregate([
    {
      $match: {
        published: true
      }
    },
    {
      $group:{
        _id: "$category",
        adet: {$sum: 1}
      }
    }
  ], (err, result)=>{
    res.json(result);
  });
});

//  aggreagete $lookup
router.get('/aggregate-lookup', (req, res)=>{
  Book.aggregate([
    {
      $match: {
        _id: mongoose.Types.ObjectId('5d6566d8991e372c5edcf4e9')
      }
    },
    {
      $lookup: {
        from: 'users', //hangi tablo
        localField: 'userid', //hangi alanla eslesecek.
        foreignField: '_id', //users tablosunda hangi id ile eslesecek.
        as: 'user' // hangi degiskende tutulacak.
      }
    },
    {
      $unwind: '$user' //yukaridaki as user degiskenini aldik.
    },
    {//sadece title ve yazari gelsin.
      $project: {
        title: 1,
        user: '$user'  //$user.fullname -> sadece user'ın fullname almak istersek.
      }
    }
  ], (err, result)=>{
    res.json(result);
  });
});

//user create
router.post('/user/new', function(req, res, next) {
  const user = new User({
    fullname: 'Demircan'
  });

  //mongodb'ye kayit islemi gerceklestiriyoruz.
  //basarili olursa data json tipinde geri donduruyoruz.
  user.save((err, data)=>{
      if(err)
        console.log(err);
      res.json(data);
  })
});

module.exports = router;
