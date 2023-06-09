import express from "express";
import helmet from "helmet";
import { connect } from 'mongoose';
import { config } from 'dotenv';
import userRoutes from './routes/user.js'
import authRoutes from './routes/auth-route.js'
import productRoutes from './routes/product-route.js'
import cartRoutes from './routes/cart-route.js'
import orderRoutes from './routes/order-route.js'


//Configurations
config()
const app=express()
app.use(express.json())
app.use(helmet())
//-------------------------------------------------------------------

//Routes
app.use('/api/users',userRoutes)
app.use('/api/auth',authRoutes)
app.use('/api/product',productRoutes)
app.use('/api/cart',cartRoutes)
app.use('/api/order',orderRoutes)


//--------------------------------------------------------------------

/* This code is connecting to a MongoDB database using the URL specified in the `MONGO_DB_URL`
environment variable. It uses the `connect` method from the `mongoose` library to establish the
connection. If the connection is successful, it logs a message "Mongo Db connected" to the console.
If there is an error in connecting to the database, it logs the error message to the console. */
connect(process.env.MONGO_DB_URL).then(()=>{
    console.log("Mongo Db connected")
}).catch((error)=>{
    console.log(error)  
})




/* `app.listen(process.env.PORT,()=>{console.log('backend server is running ')})` is starting the
server and listening for incoming requests on the port specified in the `PORT` environment variable.
When the server starts successfully, it logs a message "backend server is running" to the console. */
app.listen(process.env.PORT,()=>{
    console.log('backend server is running ')
})