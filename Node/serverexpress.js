const express = require('express')
const path = require('path')
const app = express()
port = 3500

// app.get('/', (req, res) => {
//     res.sendFile(
//         path.resolve(__dirname, 'public/index.html')
//     )
// })

app.use('/', express.static(path.resolve(__dirname, 'public')))

app.get('/something', (req, res) => {
    res.send('Hey! Something\'s here')
})

app.post('/something', (req, res) => {
    res.send('This is usually not visible')
})

app.listen(port, () => {
    console.log(`🚀 Server is running at http://localhost:${port}`);
});
