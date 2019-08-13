//event -> olay
// herhangi bir dosya okunduğunda, db'den bir şey silindiğinde vb gibi işlemlerde
//çalışması için bir olay tanımlanabilir.

const events = require('events');
let eventEmitter = new events.EventEmitter();
let eventEmitter2 = new events.EventEmitter();
let eventEmitter3 = new events.EventEmitter();
//yapılacak olayı tanımladık.
eventEmitter.on('selam', ()=>{
    console.log("merhaba node");
});

eventEmitter2.on('selam', (name)=>{
    console.log(`merhaba ${name}`);
});

eventEmitter3.on('selam', (object)=>{
    console.log(`merhaba ${object.name} ${object.surname}`);
});

//olayı tetikledik.
eventEmitter.emit('selam');

//değer göndermek
let name = "kadir";
eventEmitter2.emit('selam',name);

//object göndermek.
eventEmitter3.emit('selam', {name:'kadir', surname:'demircan'});
/*setTimeout(()=>{
    eventEmitter.emit('selam');
},2000);*/

//once event örneği.
//yalnızca bir kere tetiklenir. 2. kez tetiklenmez.
let eventEmitter4 = new events.EventEmitter();
eventEmitter4.once('merhaba', ()=>{
    console.log('merhaba');
});

eventEmitter4.emit('merhaba');
