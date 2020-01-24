let a = [1,2,3,4,2,4]

// so what i will try to do is create a new array called b
// then i will go through a elements one by one
// now if the current element in a is not present in b
// then i will put that element in b
// else i will not put that element in b
// as a result at the end i will have a new array b without duplicate elements

let len = a.length
console.log('len:', len)
let b = []
for(let i=0;i<len;i++){
    if( b.indexOf(a[i]) === -1 ){
        b.push(a[i])
    }
}
console.log(b)