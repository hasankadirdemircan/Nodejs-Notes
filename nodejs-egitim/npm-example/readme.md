

<h1> npm komutları </h1>


package.json dosyası oluşturmak için;

**npm init**

Değerleri otomatik girilmiş şekilde oluşsun istiyorsak;

**npm init -y**

<hr>

**npm install nodemailer --save**
var olan package.json dosyasina eklemek icin.
diyelim ki app2 adında bir klasörümüz var ve biz tek tek npm install crypto vs yazmak yerine
**npm install**
dediğimizde package.json 
içerisindeki tüm bağımlılıklar yüklenmiş olacaktır.

<hr>

Eğer belirli bir version yüklemek istiyorsak;

 **npm install underscore@1.8.2**

@ işaretinden sonra version belirtebiliriz.

<hr>

paketlerden yeni version olup/olmadığını öğrenmek için;

**npm outdated**

<hr>

Tek bir paket güncellemek için;

**npm update <packagename>**

örn (npm update underscore ) ile update edebiliriz.

<hr>

Tamamını güncellemek için;

**npm update**

komutu ile tüm paketleri güncelleyebiliriz.

<hr>

Eğer sadece dev ortamı için bir paket yükleyeceksek;

**npm install gulp --save-dev**

Böylelikle environment eğer dev ise; gulp'u da kuracak.

Env. product ise gulp'u kurmayacak.

