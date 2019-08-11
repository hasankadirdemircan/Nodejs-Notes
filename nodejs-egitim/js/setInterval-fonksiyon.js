//belirtilen araliklarla surekli calisir.

var sayi = 1;

var interval = setInterval(function(){
    if(sayi === 5){
        clearInterval(interval);
    }
    console.log("hi: " + sayi);
    sayi++;
},1000);