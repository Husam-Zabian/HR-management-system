'use strict';


function Employee(EmployeeID, FullName, Department, Level, ImageURL) {
  this.EmployeeID = EmployeeID;
  this.FullName = FullName;
  this.Department = Department;
  this.Level = Level;
  this.ImageURL = ImageURL;
};




Employee.prototype.calculatingSalary = function () {
  let max = 10;
  let min = 5;
  if (this.Level == "Junior") {
    min = 500;
    max = 1000;
  } else if (this.Level == "Mid-Senior") {
    min = 1000;
    max = 1500;
  } else {
    min = 1500;
    max = 2000;
  }
  let aaaa = Math.floor(Math.random() * (max - min) + min);
  this.Salary = aaaa - (aaaa * 7.5/100);
  console.log(aaaa)
};

Employee.prototype.render = function(){
  document.write(`Name : ${this.FullName}  Salary : ${this.Salary}    \r`);
}


const valorant1 = new Employee(1, "Ghazi Samer", "Administration", "Senior", "testing");
const valorant2 = new Employee(1, "Lana Ali", "Finance", "Senior", "testing");
const valorant3 = new Employee(1, "Tamara Ayoub", "Marketing", "Senior", "testing");
const valorant4 = new Employee(1, "Safi Walid", "Administration", "Mid-Senior", "testing");
const valorant5 = new Employee(1, "Omar Zaid", "Development", "Senior", "testing");
const valorant6 = new Employee(1, "Rana Saleh", "Development", "Junior", "testing");
const valorant7 = new Employee(1, "Hadi Ahmad", "Finance", "Mid-Senior", "testing");




//valorant1.calculatingSalary();
//valorant1.render();
//console.log(valorant1);

//valorant2.calculatingSalary();
//valorant2.render();
//console.log(valorant2);

//valorant3.calculatingSalary();
//valorant3.render();
//console.log(valorant3);

//valorant4.calculatingSalary();
//valorant4.render();
//console.log(valorant4);

//valorant5.calculatingSalary();
//valorant5.render();
//console.log(valorant5);

//valorant6.calculatingSalary();
//valorant6.render();
//console.log(valorant6);

//valorant7.calculatingSalary();
//valorant7.render();
//console.log(valorant7);









const test = new Employee("Husam", "Zabian", "Developer", "Senior", "aaa");




let res =0

function uniqueID() {
 // res = Math.floor((Math.random()) * 9000 + 1000) 
 res = Date.now()
 res = res.toString()
 return  res = res.substr(-4);
  }


 uniqueID();

console.log(res);



Employee.prototype.render = function() {

    

    const container = document.getElementById('Card');
    

    const divEl = document.createElement('div');
    container.appendChild(divEl);

    
    const nameEl = document.createElement('h3');
    divEl.appendChild(nameEl);
    nameEl.textContent = this.FullName;

    
    const priceEl = document.createElement('h5');
    divEl.appendChild(priceEl);
    priceEl.textContent = `Salary: ${this.Salary}$`


    
    const imgEl = document.createElement('img');
    divEl.appendChild(imgEl);
    imgEl.setAttribute('src',this.imgPath);
    imgEl.width = "150";
    imgEl.height = "150";

    const pEl = document.createElement('p');
    divEl.append(pEl);

    
    
}



drinkForm.addEventListener('submit', addNewEmployeeHandler);

function addNewEmployeeHandler(event) {
    event.preventDefault();
    console.log(event);
    let drinkName = event.target.name.value;
    let ingredients = event.target.ingredients.value;
    let imgPath = event.target.imgUrl.value;
    
}