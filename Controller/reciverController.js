const recivers =require('../Modal/reciverSchema')

exports.addReciver=async(req,res)=>{
    console.log('reciver');
   

    const userId = req.payload
    console.log(userId);

    const {name,mobile,bloodgroup} = req.body
    console.log(name,mobile,bloodgroup);

   /*  res.status(200).json('uploaded reciver') */

    try {
        
        const existingReciver = await recivers.findOne({name})
        if (existingReciver) {
            res.status(406).json(`Reciver Already Exists`)  
        } else {
           const newrevicer = new recivers({
            name,
            mobile,
            bloodgroup,
            userId:userId
           }) 
           await newrevicer.save()
           res.status(200).json(newrevicer)

        }

     } catch (error) {
         res.status(401).json( `Error is ${error}` )
     }

}


// for urgent blood

exports.getReciver = async(req,res)=>{
    try {
       const urgent = await recivers.find().limit(3)
       res.status(200).json(urgent) 
    } catch (error) {
       res.status(401).json(`Failec due to ${error} `) 
    }
}


exports.getAllReciver = async(req,res)=>{
    try {
       const allReciver = await recivers.find()
       res.status(200).json(allReciver) 
    } catch (error) {
        res.status(401).json(`Faied due to ${error} `)    
    }
}


// delete reciver data
exports.deleteReciver = async(req,res)=>{
    try {
        const {id}=req.params
        const removeReciver = await recivers.findByIdAndDelete({_id:id})
        res.status(200).json(removeReciver) 

    } catch (error) {
        res.status(401).json(`Failed due to ${error} `)  
    }
}