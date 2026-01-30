let score = 33
console.log(typeof score);
console.log(typeof(score));


score = "33"
console.log(typeof score);
console.log(typeof(score));


score = "33abc"
let valueInNumber = Number(score)
console.log(valueInNumber)
console.log(typeof valueInNumber)

score = null
valueInNumber = Number(score)
console.log(valueInNumber)
console.log(typeof valueInNumber)


score = undefined
valueInNumber = Number(score)
console.log(valueInNumber)
console.log(typeof valueInNumber)


score = false
valueInNumber = Number(score)
console.log(valueInNumber)
console.log(typeof valueInNumber)


// important notes
// "33" => can be converted to number
// "33abc" => converted to NaN but still the type is number.
// undefined => NaN but still the type is number.


let isLoggedIn = 1
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn)
console.log(typeof booleanIsLoggedIn)

isLoggedIn = ""
booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn)
console.log(typeof booleanIsLoggedIn)

isLoggedIn = "Prajwal"
booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn)
console.log(typeof booleanIsLoggedIn)


// 1 => true; 0 => false
// "" => false
// "Prajwal" => true


let someNumber = 45
let stringNumber = String(someNumber)
console.log(stringNumber)
console.log(typeof stringNumber)