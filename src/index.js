import "dotenv/config";
import connectDB from "./db/index.js";

connectDB();

/*
;(async() => {
   try {
   await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)  //URI comes from env file.
   app.on("Error: ", (error) => {
      console.log("Error: ", error);
      throw error;
   }) 
   app.listen(process.env.PORT, () => {
      console.log(`The App is Listening on port: ${process.env.PORT}`)
   })
  } catch (error) {
    console.error("Error: ", error);
    throw error;
   }
})() //iife function (This function invokes immidiately)
*/