const http = require('http')
const app= require("./index")
const server=http.createServer(app)
const port = process.env.PORT || 3000
server.listen(port,()=>{
    console.log( ` Server has started on port ${port} ` )
})