const upload=require('../utils/upload')
const fs=require('fs')
const path = require("path");

const uploadfile=(req, res) => {
    upload(req, res, (err) => {
      if (err) {
        res.render("index", {
          msg: err,
        });
      } else {
        res.render("index", {
          msg: "File Uploaded",
        });
      }
    });
  }

  const seeallphoto=(req, res) => {
    fs.readdir(path.join(__dirname, "../public/upload"), function (err, files) {
        if (err) {
          return console.log("Unable to scan directory: " + err);
        }
        res.status(200).render("galary", {
          files,
        });
      });
  };
  module.exports={uploadfile,seeallphoto}