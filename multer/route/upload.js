const express= require('express')
const router=express.Router();
const uploadContro=require('../controller/uploadController')

router.post('/upload',uploadContro.uploadfile)
router.get('/seeallphoto',uploadContro.seeallphoto)

module.exports=router;