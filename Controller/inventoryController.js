const inventories = require('../Modal/inventorySchema')

exports.addInventory=async(req,res)=>{
    console.log('inventories');


    const userId = req.payload
    console.log(userId);

    const {sl,bloodgroup,total,bloodbank} = req.body
    console.log(sl,bloodgroup,total,bloodbank);

    
/*     res.status(200).json('uploaded inventory') */

try {

    const existingInventory = await inventories.findOne({bloodbank})
    if (existingInventory) {
        res.status(406).json(`Inventory Already Exists`) 
    } else {
       const newInventory = new inventories({
        sl,
        bloodgroup,
        total,
        bloodbank,
        userId:userId
       }) 
       await newInventory.save()
       res.status(200).json(newInventory)
    }
    
} catch (error) {
    res.status(401).json( `Error is ${error}` ) 
}


}

exports.getAllInventory= async(req,res)=>{
    try {
       const allReciver = await inventories.find()
       res.status(200).json(allReciver) 
    } catch (error) {
        res.status(401).json(`Failec due to ${error} `)    
    }
}