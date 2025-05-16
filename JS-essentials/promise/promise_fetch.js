//const promise1 = fetch("/data/json") // it wont fetch local json file using 'fetch'

const promiseObj = fetch('https://jsonplaceholder.typicode.com/users/1')
promiseObj.then(response=>{
    const promise2 = response.json()
    promise2.then(response=>{
        console.log(response)
    })
})