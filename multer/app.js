const express = require("express");
const app = express();
const port = 2000;
const uploadRouter=require('./route/upload')


app.set("view engine", "ejs");
app.use(express.static("./public"));
app.use('/',uploadRouter);


app.get("/", (req, res) => {
  res.render("index");
});

// app.post("/upload", (req, res) => {
//   upload(req, res, (err) => {
//     if (err) {
//       res.render("index", {
//         msg: err,
//       });
//     } else {
//       res.render("index", {
//         msg: "File Uploaded",
//       });
//     }
//   });
// });

// app.get("/showall", (req, res) => {
//   getPhotos(req, res);
// });
app.listen(port, "localhost", () => {
  console.log("app is runnnig");
});
