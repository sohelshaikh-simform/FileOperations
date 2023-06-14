const multer = require("multer");
const path = require("path");

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
}).fields([{ name: "myFile", maxCount: 2 }]);

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
module.exports =upload