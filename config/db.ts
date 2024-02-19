import  mongoose from"mongoose";
const dbConnect = async() =>{
    try{
        const conn = await mongoose.connect(process.env.MONGODB_URI!);
        console.log("Database Connect Successfylly");
        
    }catch (error){
        console.error(`Database error ${error}`);
        process.exit(1);
    }
}

export default dbConnect;