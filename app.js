const express= require('express');
const app= express();
// const port= 3000;

app.listen('3000',()=>{
    console.log("Server Running");
})
app.use(express.json());
const employeeRoutes=require("./routes/employeeRoutes");

app.use("/api/employees", employeeRoutes);
