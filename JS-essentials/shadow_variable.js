let name = "Mohan"

function shadowVariable() {
    let name = "Mohan Borle"
    console.log(name) // Output: Mohan Borle
    // The variable name inside the function shadows the variable name outside the function
}
shadowVariable()
console.log(name) // Output: Mohan
