require('dotenv').config();
global.RootPath = process.cwd();
//-------------------------------------
const host = process.env.HOST_NAME||"localhost";
const port = process.env.PORT || 3000;
const http = require('http');
const app = require('./app');
const server = http.createServer(app);
server.listen(port,host,()=>{
    console.log(`Server listening on port : ${port}`);
})