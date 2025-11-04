import dotenv from "dotenv";
dotenv.config();
import mongoose from 'mongoose';
import express from 'express';

const app = express()

;( async ()=>{
    try{
        const connection_instance = mongoose.connect(`${process.env.MONGODB_URI}/${process.env.DB_NAME}`)
        console.log(`\nMongoDB  Connection Sccuessfull, DB HOST: ${connection_instance}`)
        app.on("error", (error) => {
            console.error("Error: ",error)
            throw error;
        })

        app.listen(process.env.PORT,()=>{
            console.log(`Server is running on port ${process.env.PORT}`);
        })
    } catch(error){
        console.error("Error: ",error)
        throw error;
    }
})()