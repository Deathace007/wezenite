//destructuring array
const arr1 = [1,2,3]
const arr2 = [3,4,5]

const arr3 = [...arr1, ...arr2]
console.log(arr3)

const objarr1 = [{
    'name': 'Mohan'
}]

const objarr2 = [{
    'name': 'Anup'
}]

const objarr3 = [...objarr1,...objarr2]
console.log(objarr3)


//destructuring Objects
const obj1 = {
    'name': 'Mohan'
}
const obj2 = {
    'name': 'Anup', //will overwite the obj1 as while destructing obj2 is the last and will be considered final
    'age':27
}
const obj3={
    ...obj1,...obj2
}
console.log(obj3)