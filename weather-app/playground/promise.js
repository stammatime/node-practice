var somePromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        //resolve(`Hey it worked!`);
        reject(`unable to fufill promise`)
    }, 2000)

});

somePromise.then((message) => {
    console.log('Success ', message);
}, (errorMessage) => {
    console.log('ERROR ', errorMessage);
})

