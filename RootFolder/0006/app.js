const willGetYouADog =  new Promise((resolve,reject){
    x = Math.random(); 
    if (x < 1){
        resolve()
    }
    else {
        reject()
    }
})

willGetYouADog.then(){
    console.log('success:')
}
willGetYouADog.catch(){
    console.log('failure:')
}