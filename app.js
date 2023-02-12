function Employee(EmployeeID,FullName,Department,Level,ImageURL) {
    this.EmployeeID = EmployeeID;
    this.FullName = FullName;
    this.Department = Department;
    this.Level = Level;
    this.ImageURL = ImageURL;
    this.Salary = finalresult ; 

    
  if(Level=="Junior"){
   let min = 500;
   let max = 1000;
  }else if(Level=="Mid-Senior"){
    let min = 1000;
    let max = 1500;
  }else{
    let min = 1500;
    let max = 2000;
  }
   
}
let finalresult =0;
Employee.prototype.getRandomArbitrary = function(min, max) {
    
    return Math.random() * (max - min) + min;   
    
  };

finalresult = Employee.getRandomArbitrary;
 
let tax =7.5/100 ;

let totalSalary = finalresult*tax;

const test = new Employee("Husam","Zabian","Developer","Senior","aaa");


function getRandomArbitrary(min, max) {
    console.log (Math.random() * (max - min) + min);
  }
getRandomArbitrary(1000,2000);

console.log(test)


