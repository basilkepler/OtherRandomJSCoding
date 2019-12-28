arrMap = [1,3,4,5]
arrNewMap = arrMap.map(x => x*2)
console.log('arrNewMap:', arrNewMap)
console.log('arrMap:', arrMap)


arrForeach = [1,3,4,5]
arrNewForeach = arrForeach.forEach(x => x*2)
console.log('arrNewForeach:', arrNewForeach)
console.log('arrForeach:', arrForeach)


/* Comparision1 - the code above is suitable only for map . its also common sense to see that if
   the code produced the same result for forEach there would have been no difference between them and thus
   there was no use for both of them to exist. The thing to remember here is that
   forEach always returns undefined ( whereas map always returns processed array)
*/
/* Comparision2 - we saw that in both cases the original array was remained unchanged. the thing to know
    is that map is the method that never alters the original array. the forEach method does have a 
    power to alter the original array if desired. This shall be discussed later.
*/


/* Now lets write a code that would work for forEach */

//example 1 - where original array is altered
arrForeach = [1,3,4,5]
arrForeach.forEach((number, i)  => arrForeach[i] *= 2); 
console.log('arrForeach:', arrForeach)

// example 2 - where original array is not altered
arrForeach = [1,3,4,5]
arrNewForeach = []
arrForeach.forEach((number, i)  => arrNewForeach[i] = arrForeach[i] * 2); 
console.log('arrNewForeach:', arrNewForeach)
console.log('arrForeach:', arrForeach)


/* So now based on our observations we can say that - 
    map always returns an array. this array is created by
    processing elements of original array. original array remains un-altered.

   whereAs

   foreach always returns undefined. you can use forEach to performing tasks like console.log on original array elements
   OR
   you can use it to alter the original array as shown above
   OR
   you can use it to populate / change another already
   declared array by processing the elements of original array.
*/

