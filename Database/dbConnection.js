// server & database connection
// 1)mongoose
const mongoose =require('mongoose')



const connectionString= process.env.DATABASE

//CONNECT

mongoose.connect(connectionString).then(()=>{
    console.log(`Monoose connected`);
}).catch((err)=>{
    console.log(err);
})
