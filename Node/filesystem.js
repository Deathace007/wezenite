const _fs =  require('fs')


//asynchronus method: Node can work on other things while OS waits for network request
function createfile(name, content){
    _fs.writeFile(name, content, (err) => {
        if(err){
            console.log(`there is an error ${err}`)
        }else{
            console.log(`File created`)
        }
    })
}

//synchronus method: Node and OS both are waiting for request
function createfileSync(name, content){
    _fs.writeFileSync(name, content)
    console.log('file created successfully')
}

module.exports = {
    createfile,
    createfileSync
}