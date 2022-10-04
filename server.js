const http=require('http');
require('dotenv')

http.createServer().listen(process.env.port,()=>{
    console.log(`server running on port ${process.env.port}`);
});