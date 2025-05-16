let friends = []

function addFriend(name) {
    friends.push(name)

}
addFriend("Mohan")
addFriend("Anup")
addFriend("Ravi")
addFriend("Ajay")

console.log(friends)
console.log(friends.length) //length of array
console.log(friends[0]) //first element of array

friends.pop() //remove last element of array
console.log(friends)

friends[2] = "Ojha" //update element of array
console.log(friends)


    