const mongoose =require('mongoose');
const employeeSchema=mongoose.Schema({
    empName:String,
    empDepartment:String,
    salaray:Number,
    experience:Number

})
const EmployeeData=mongoose.model('employee',employeeSchema);
module.export=EmployeeData