const service= require('../Service/employeeService')

class EmployeeController{
    async getAll(req,res){

        try{
            const employees= await service.getAllEmployees();
            return res.status(200).json(employees);
        } 
        catch(error)
        {
            return res.status(500).json({message:error.message})
        }

    }

    async getById(req,res){
        try{
             const id = req.params.id;
            const employee= await service.getEmployeeById(id);
            if(!employee){
                return res.status(404).send("Employee not found");
            }
            return res.status(200).json(employee);
        }
        catch(error){
            return res.status(500).json({message:error.message})
        }
    }
    
    async save(req,res){
        try{
            const employeeData=req.body;
             console.log("Received employee:", req.body);
            const savedEmployee= await service.saveEmployee(employeeData);
            return res.status(201).json(savedEmployee);
        }
        catch(error){
            return res.status(500).json({message:error.message})
        }   
    }

    async deleteById(req,res){
        try{
            const id=req.params.id;
            const deleted =await service.deleteEmployee(id);
            if(deleted===0){
                return res.status(404).send("Employee deleted sucessfully")
            }
             return res.status(200).send("Employee deleted successfully");
        }
        catch (error) {
            return res.status(500).json({ message: error.message });
        }}
        
         
        async updateById(id,employeeData){
            try{
                
            }
            catch(error){
                
            }
        
        }
    }
module.exports=new EmployeeController();
