const http = require('http')

const server = http.createServer((req,res) => {
    if(req.url === '/'){
        res.end('Welcome to the homepage')
        return
    }
    if(req.url === '/about'){
        res.end('this is about us i think')
        return
    }
    res.end(`
    <h1> oopies! </h1>
    <p> Please click here: </p>
    `)
})

server.listen(5000)