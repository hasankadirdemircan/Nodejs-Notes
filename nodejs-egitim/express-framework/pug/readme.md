<h1 align="center"> PUG NOTES </h1> <br>
##### Package.json oluşturmak için,

```npm init -y```

##### Express yüklemek için,

```npm install express --save```

##### Pug yüklemek için,

```npm install pug --save```

##### Pug dosyası oluşturmak için,

<ul>
  <li>views klasörü oluşturuyoruz</li>
  <li>pug varsayılan olarak view nesnelerini views klasörü altından okur.</li>
  <li>pug dosyaları burada bulunur.</li>
</ul>.

##### Pug sayfamı render ederken obje göndermek için,

<ul>
  <li>Pug sayfasında değişken gönderip bu değişkenimi sayfada kullanmak isteyebilirim.</li>
  <li>render methodu içerisinde nesneyi gönderebilirim.</li>
</ul>.

``` res.render('index.pug', {name:'kadir', surname:'demircan'} );``` 

##### Pug dosyasına başka bir pug dosyasını include etmek için,

``` include footer.pug```

##### Yorum satırı için,

``` //command line ```

##### Değişken oluşturmak için,

<ul>
  <li>Değişkeni iki farklı şekilde kullanabilirim.</li>
  <li>Değişkenlere toUpperCase() gibi fonksiyonları kullanabilirim.</li>
</ul>.

```\- var temp = 'değişken tanımlama'
- var temp = 'değişken tanımlama'
- var name = 'hkdemircan'

br
| Temp : #{temp.toUpperCase()}
br
=name.toUpperCase()
```

​        