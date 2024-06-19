// 1) import express
const express = require('express')

const userController= require('../Controller/userController')
const adminController=require('../Controller/adminController')
const donorController= require('../Controller/donorController')
const reciverController= require('../Controller/reciverController')
const inventoryController= require('../Controller/inventoryController')
const jwtMiddleware = require('../Middleware/jwtMiddleware')
 //const multerConfig = require('../Middleware/multerMiddleWare') 


/* //import multer
const multer=require('../Middleware/multerMiddleWare') */

// 2)  object for routin class
const router = new express.Router()

// 3) path
// path for register request -which is made in allAPI.js1 in frntend
router.post('/user/register',userController.register)

 // paths to resolve login request
router.post('/user/login',userController.login)

  // paths to resolve login request
router.post('/admin/login',adminController.adminLogin) 

// path to add to donor
router.post('/add-donor',jwtMiddleware,donorController.addDonor)

/* // path for images
router.post('/add-donor', jwtMiddleware,multerConfig.single('donorImage'),donorController.addDonor) */

// path to add to reciver
router.post('/add-reciver',jwtMiddleware,reciverController.addReciver)

// path to add to inventories
router.post('/add-inventory',jwtMiddleware,inventoryController.addInventory)

// path to get urgent
router.get('/home-reciver',reciverController.getReciver)


// path to get all recivers in userpage
router.get('/all-reciver',jwtMiddleware,reciverController.getAllReciver)



// path to get all donors in userpage
router.get('/all-donor',jwtMiddleware,donorController.getAllDonor)


// path to get all donors in userpage
router.get('/all-inventory',jwtMiddleware,inventoryController.getAllInventory)

//path to delete reciver data
router.delete('/user-reciver/delete/:id',jwtMiddleware,reciverController.deleteReciver)

//path to delete donor data
router.delete('/user-donor/delete/:id',jwtMiddleware,donorController.deleteDonor)

//path to delete donor data
router.put('/user-donor/edit/:id',jwtMiddleware,donorController.editDonor)

//export router
module.exports= router
