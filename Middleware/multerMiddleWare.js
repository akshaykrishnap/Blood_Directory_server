// if you want to uploads pdf,jpeg,etc


// import multer
const multer = require('multer')

// create storage
const storage = multer.diskStorage({
    destination:(req,file,callback)=>{
callback(null,'./uploads') 
    },
    filename:(req,file,callback)=>{
        filename=`image -${Date.now()}-${file.originalname}}`
        callback(null,filename)
    }
})

// 3)filefilter

const filefilter=(req,file,callback)=>{
    if (file.mimetype==='image/png' || file.mimetype==='image/jpeg' || file.mimetype==='image/jpg') {
        callback(null,true)
    } else {
       callback(null,false) 
       return callback(new Error("Only png,jpeg,jpg are allowed"))
    }
}

// create multerConfig

const multerConfig=multer({
    storage,
    fileFilter
})

module.exports=multerConfig