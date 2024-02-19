import  mongoose from"mongoose";
const dbConnect = async() =>{
    try{
        const conn = await mongoose.connect('mongodb+srv://dhakar:Dhakar$8441066893@e-store.q7icw9s.mongodb.net/d-app');
        console.log("Database Connect Successfylly");
        
    }catch (error){
        console.error(`Database error ${error}`);
        process.exit(1);
    }
}

export default dbConnect;