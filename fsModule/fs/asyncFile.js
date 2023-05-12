const http = require("http");
const server = http.createServer();
const fs = require("fs");


fs.writeFile("../txt/second.txt", "This is asyncData", () => {
  console.log("sucessfully write the data");
});

fs.appendFile("../txt/second.txt", "\nthis is from append", (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("successfully appended the data");
  }
});

fs.readFile("../txt/second.txt", "utf-8", (err, chunk) => {
  console.log(chunk);
});

server.on("request", (req, res) => {
    fs.readFile("../txt/second.txt", "utf-8", (err, data) => {
      if (err) {
        console.log(err);
        res.end("File not Found")
      }
      else{
          res.end(data);
        }
    });
});
server.listen(9000, "localhost");

