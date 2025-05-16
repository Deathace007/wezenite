//Multiline string is obtained using backticks (``)
const singleline = "This is single line string"

const multiline=`this 
is 
a
multi
line
string.`

console.log(multiline)

const person={
    'name': 'Mohan',
    'age':24
}
const normalconct = 'My name is '+person.name+' and age is '+person.age+''
const templiteconcat = `My name is ${person.name} and age is ${person.age}`

console.log(normalconct, templiteconcat)