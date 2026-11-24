const db=require("./db");

async function getConnnection(){
    try{
         const conn= await db.getConnection();
         console.log("Connected Sucessfully");
        conn.release();
     }
    catch(exception){
    console.log("Database connection failed:", exception.message);
    }
  

}
 getConnnection();