const http = require('http')
const port = 3500
const server = http.createServer((req, res) => {
    res.write('Hello client over there')
    res.end()
})
console.log(port)
server.listen(port, () => {
    console.log('Hey! We are ready to take requests')
})