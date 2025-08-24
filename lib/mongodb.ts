import mongoose from "mongoose";

let isConnected =false;
const connectDB = async () =>{
    if(isConnected){
        console.log("DB is alredy connected ");
        return;
    }
    try{
        await mongoose.connect(process.env.MONGO_DB_URL!,);
        isConnected =true;
        console.log("sucessfully connnected to your MongoDB")
    }
    catch(error){
        console.error("fail to connect Data base",error);
        throw error;
    }
}   
export default connectDB;