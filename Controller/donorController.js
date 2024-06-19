const donors =require('../Modal/donorSchema')


exports.addDonor = async(req,res)=>{
    console.log('donor');
  
    const userId = req.payload
    console.log(userId);

/*     const projectImage = req.file.filename
    console.log(projectImage); */

    const {name,mobile,bloodgroup} = req.body
    console.log(name,mobile,bloodgroup);

     /*  res.status(200).json('uploaded donor')  */
   try {
        
        const existingDonor = await donors.findOne({name})
        if (existingDonor) {
            res.status(406).json(`Donor Already Exists`)  
        } else {
           const newDonor = new donors({
            name,
            mobile,
            bloodgroup,
            userId:userId
           }) 
           await newDonor.save()
           res.status(200).json(newDonor)

        }

     } catch (error) {
         res.status(401).json( error)
     } 
  
 

   

}



exports.getAllDonor = async(req,res)=>{
    try {
       const allDonor = await donors.find()
       res.status(200).json(allDonor) 
    } catch (error) {
        res.status(401).json(`Failed due to ${error} `)    
    }
}


// delete donor data
exports.deleteDonor = async(req,res)=>{
    try {
        const {id}=req.params
        const removeDonor = await donors.findByIdAndDelete({_id:id})
        res.status(200).json(removeDonor) 

    } catch (error) {
        res.status(401).json(`Failed due to ${error} `)  
    }
}

// edit donor data
exports.editDonor = async(req,res)=>{
    const {id} = req.params
    const userId = req.payload

    const {name,mobile,bloodgroup} = req.body
    console.log(name,mobile,bloodgroup);

    try {
        const updatedDonor = await donors.findByIdAndUpdate({_id:id},{name,mobile,bloodgroup,userId})
        await updatedDonor.save()
        res.status(200).json(updatedDonor)
    } catch (error) {
        res.status(401).json(`Failed due to ${error} `)  
    }

}