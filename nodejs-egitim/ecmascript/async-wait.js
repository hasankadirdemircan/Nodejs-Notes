let user = {id: 10, name: 'kadir'};

let friends = [ {id: 11, name: 'hasan'}, {id: 12, name: 'demircan'}];

let getUser = () => {
    return new Promise((resolve, reject) =>{
        setTimeout(()=>{
            resolve(user);
        }, 500);
    });
};

let getFriends = (userID) => {
    return new Promise((resolve, reject) =>{
      setTimeout(() => {
          resolve(friends);
      }, 1000);
    });
};

//callback hell
/*
let userID;
getUser()
    .then(function(user){
        userID = user.id;
        getFriends(userID).then(function(friends){
            console.log(user);
            console.log(friends);
        });
    });
*/

// promise chain
/*
getUser()
    .then((user)=>{
        return user.id;
    })
    .then((userID)=>{ //ustteki then blogundan user.id ' yi userID'ye aldık.
        getFriends(userID)
            .then((friends)=>{ //gelen objeyi friends'e attik.
                console.log(friends);
            });
    });
*/

/*
getUser()
    .then((user)=>{
        return getFriends(user.id)
    })
    .then((friends)=>{
        console.log(friends);
    });
*/

//async-await ile yapım;
async function asenkronAkis () {
    //then yapisina gerek kalmiyor.
    console.log("islem basladi.");
    let user = await getUser();
    console.log("user servis bitti");

    console.log("friends servisi başladı.");
    let friends = await getFriends(user.id);
    console.log("friends servisi bitti.");
    console.log(friends);
};

asenkronAkis();