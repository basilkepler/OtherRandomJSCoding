console.log("person1 shows ticket")
console.log("person2 shows ticket")

const promiseWifeBringingTickets = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('ticket')
    }, 3000)
})
promiseWifeBringingTickets.then((t) => {
    console.log("person3 shows " + t)
})

console.log("person4 shows ticket")
console.log("person5 shows ticket")