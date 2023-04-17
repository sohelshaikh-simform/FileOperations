const http = require("http");
const server = http.createServer();
const fs = require("fs");

server.on("request", (req, res) => {
    const rStrea = fs.createReadStream("./txt/thfird.txt");
    rStrea.on("data", (chunkData) => {
      res.write(chunkData);
    });
    rStrea.on("end", () => {
      res.end();
    });
    rStrea.on('error',(err)=>{
      console.log(err.path);
      res.end("File Not Found");
    })
});
server.listen(8000,"localhost");