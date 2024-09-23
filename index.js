// Import Modules
const http = require('http')
const fs = require('fs')

const port = process.env.PORT

// Read Files
const home = fs.readFileSync('./home.html','utf-8');
const contact = fs.readFileSync('./contact.html','utf-8');


// Connect Server 
const server = http.createServer((req,res)=>{
    if(req.url==="/")
    res.end(home);
    else if(req.url==="/about")
    res.end("About Page");
    else if(req.url==="/contact")
    res.end(contact);
    else{
        res.end("404 page not found")
    }
});
// Listen to the port
server.listen(port,()=>{
    console.log(`Server is Listening on http://${hostName}:${port}`)
})
