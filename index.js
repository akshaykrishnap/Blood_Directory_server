 //dotenv
 require('dotenv').config()

 //express
 const express = require('express')

 //cors
 const cors = require('cors')

 // import router
 const router=require('./Routing/router')

/*   //import application middleware
const appMiddleware= require('./Middleware/appMiddleware') */

 //import dbconnection
 require('./Database/dbConnection')


 // server
 const bDServer=express()

 //cors-server
 bDServer.use(cors())

 //json->js
 bDServer.use(express.json())


/*   // appmiddleware
  bDServer.use(appMiddleware) */



 //server using router
 bDServer.use(router)




// port
const PORT =4100 || process.env

//run server
bDServer.listen(PORT,()=>{
    console.log(`Blood Directory Server is running successfully at port number ${PORT} `);
})


//get 
bDServer.get('/',(req,res)=>{
    res.send(`<h1 style ="color:red">Server is running successfully and ready to resolve</h1>`)
})



/* //post
bDServer.post('/',(req,res)=>{
    res.send('Hello Post Request')
})

//put
bDServer.put('/',(req,res)=>{
    res.send('Hello Put Request') 
})  */