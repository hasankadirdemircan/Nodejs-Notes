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
          reject("arkadaş listesine ulaşılamadı");
      }, 1000);
    });
};

async function asenkronAkis () {
    try{
        let user = await getUser();
        let friends = await getFriends(user.id);
        console.log(user, friends);
    }catch(error){
        console.log(error);
    }

};

asenkronAkis();