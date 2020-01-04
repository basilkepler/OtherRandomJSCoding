const willGetYouADog =  new Promise((resolve,reject) => {
    x = Math.random(); 
    console.log('x:', x)
    if (x < 0.5){
        resolve()
    }
    else {
        reject()
    }
});

willGetYouADog.then(() => {
    console.log('resolved' )
})
willGetYouADog.catch(() => {
    console.log('rejected' )
})
