//.map(): iterates over the array and gives new arr based on provided condition
const arr = [1,2,3,4,5,6,7,8]

const maping = arr.map(()=>10)
const argmaping = arr.map((item)=>item**2)

console.log(arr, maping, argmaping)

//.filter(): have to provide boolean value or condition
const friends=[{
    'name':'Mohan',
    'age': 24
},{
    'name':'Anup',
    'age':25
},{
    'name':'Priyanshu',
    'age':16
},{
    'name':'Akshat',
    'age':14
}]

const filtered = arr.filter((item)=>item>5)
const filteredfriends = friends.filter((obj)=>obj.age>18)
console.log(filtered, filteredfriends)

//.find()
const findname = friends.find((obj)=> obj.name === 'Mohan')
console.log(findname)

//forEach(): for loop for arrays 
friends.forEach(obj=>{
    console.log(obj)
})