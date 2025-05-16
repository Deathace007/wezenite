let names= "Mohan Borle"
let age = 24
let sum = 200

function printAll(){
    console.log("Name is", names)
    console.log("Age is", age)
    console.log("Total sum is", sum)
}

printAll()

//function parameter

function addAge(incrementBy){
    age = age + incrementBy
}

addAge(5)
console.log(age)

function returnAge(incrementBy){
    return (age+incrementBy)
}
const newAge = returnAge(5)
console.log(newAge)