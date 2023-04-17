const express = require("express");
const app = express();
const port = 2000;
const path = require("path");
const multer = require("multer");
app.set("view engine", "ejs");
// app.use

app.use(express.static("./public"));

// set Storage Engine
const storage = multer.diskStorage({
  destination: "./public/upload/",
  filename: (req, file, cb) => {
    cb(
      null,
      file.fieldname + "-" + Date.now() + path.extname(file.originalname)
    );
  },
});
// Init Upload

const upload = multer({
  storage: storage,
  limits: { fileSize: 1000000 },
  fileFilter: (req, file, cb) => {
    checkFiletype(file, cb);
  },
}).single("myFile");

// check file type
const checkFiletype = (file, cb) => {
  // Allowed ext
  const filetypes = /jpeg|jpg|png|gif|avif|json|xml/;
  // Check ext
  const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
  const mimetype = filetypes.test(file.mimetype);
  if (extname && mimetype) {
    return cb(null, true);
  } else {
    return cb("Error:Images only");
  }
};

app.get("", (req, res) => {
  res.render("index");
});
app.post("/upload", (req, res) => {
  upload(req, res, (err) => {
    if (err) {
      res.render("index", {
        msg: err,
      });
    } 
    else {
      if (req.file == undefined) {
        res.render("index", {
          msg: 'Error:No file Selected',
        });
      }
      else{
        res.render('index',{
            msg:'File Uploaded',
            file:`upload/${req.file.filename}`
        })
      }

    }
  });
});
app.listen(port, "localhost", (req, res) => {
  // res.send("app is listing on port 3000")
  console.log("app is runnnig");
});
