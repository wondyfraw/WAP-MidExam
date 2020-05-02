
"use strict";

//this.firstName = "WOnde";
//console.log(this);
var x=10;
function f() {
    var x=5;
    console.log(x);
}
f();
console.log(x);
function f1() {
  let firstNam= "Anna";
  const g =function () {
        console.log(this);
  }
  g();
}
f1();

function f2() {
   let firstName = "Anna2";
   const g2 = ()=>console.log(this);  //undefined
   g2();
}
f2();

function  Person(firstName) {
    console.log(this);  //person object
    this.firstName = firstName;
    console.log(this.firstName);
}
const ana = new Person("Ana");

const person2 = {
          firstName : "Ann2",
          getFirstName : function () {
              console.log(this); //return person2
              const changeFirstName = function (newFirstName) {
                  console.log(this); ///undefined
                  //this.firstName = newFirstName;
              }
              changeFirstName("Bob2");
              console.log(this.firstName);
              return this.firstName;
          }
};
//const pp = Object.create(person2);
console.log(person2.getFirstName());


const person3 = {
    firstName : "Ann3",
    getFirstName : function () {
        console.log(this); //return person2
        const self = this;
        const changeFirstName =  (newFirstName) =>{
            console.log(this); ///P3
            self.firstName = newFirstName;
        }
        changeFirstName("Bob2");
        console.log(this.firstName);
        return this.firstName;
    }
};

console.log(person3.getFirstName());

const person4 = {
    firstName : "Ann4",
    getFirstName : function () {
        console.log(this); //return person4
        const changeFirstName = function (newFirstName){
            console.log(this); ///person4
            this.firstName = newFirstName;
        }
        changeFirstName.bind(this,["Bob4"]);
        console.log("P4 =" +this.firstName);
        return this.firstName;
    }
};

console.log(person4.getFirstName());

const employee5 = {
         fName : null,
         lName: null,
         getFullName: function () {
             return this.fName + " "+this.lName;
         }
};

const  employeeSalary = {
            salary : 0,
            payDate: "",
            __proto__ : employee5,
            getSalaryDetail: function (emp,salary, payDate) {
                this.__proto__ = emp;
                return this.getFullName() + " " + salary + payDate;
            }
};

const paySalary = function (salary, payDate) {
       console.log(this.getFullName() + " is payed "+ salary + " on "+ payDate);
}

const anna = Object.create(employee5);
anna.fName = "Anna5";
anna.lName = "Smith";
console.log(anna.getFullName());
const payAnnaSalary = paySalary.bind(anna, 25505,new Date());
const emplSalary = Object.create(employeeSalary);

const paySalary2 = emplSalary.getSalaryDetail(anna,25000, new Date());
payAnnaSalary();
console.log(paySalary2);

let animal = {
    eats: true,
    walk: function() { /* this method won't be used by rabbit */
        //alert("Rabbit! Bounce-bounce!");
    }
};
let rabbit = {
    __proto__: animal
};
console.log(rabbit.walk());



function  Student(studentId, firstName, lastName, cgpa) {
    this.studentId = studentId;
    this.firstName = firstName;
     this.lastName = lastName;
     this.cgpa = cgpa;
}

const  student1 = new Student("000-61-0001", "Anabelle", "Smith", 3.05);
const  student2 = new Student("000-61-0002", "Bob", "Johnes", 2.96);

 Student.prototype.toCSVString = function () {
     return this.studentId + "," +this.firstName + "," +this.lastName + "," + this.cgpa;
 }

console.log(student1.toCSVString());

 const  myCalculator = (function(){
       const doAddition = function (num1, num2) {
                   return num1 + num2;
       }

       const doMultiplication = function (num1, num2) {
             return num1 * num2;
       }

       return{
           doAddition : function(num1, num2){
                   return  doAddition(num1,num2);
           },
           doMultiplication : function (num1,num2){
              return doMultiplication(num1,num2);
           }
       }
 })();

 console.log(myCalculator.doAddition(1,2));
 console.log(myCalculator.doMultiplication(2,3));

 const car = {
          make : "default",
          model: "default",
          color: "default"
 }

 car.drive = function (speed) {
     console.log("The "+ this.color + this.make + this.model +" is driving at "+speed + "mph");
 }
 car.stop = function () {
     console.log("The "+this.color+ " "+ this.make +" "+ this.model + " is stopped");
 }
 const redHondaAccord = Object.create(car);
 redHondaAccord.color = "red";
 redHondaAccord.model = "Honda";
 redHondaAccord.make ="Accord";
 redHondaAccord.drive(200);
 
 function Car(color,model,make) {
   this.make = make;
   this.model = model;
   this.color = color;
 }

 Car.prototype.drive = function (speed) {
     console.log("The "+ this.color + this.make + this.model +" is driving at "+speed + "mph");
 }

 Car.prototype.stop = function () {
     console.log("The "+this.color+ " "+ this.make +" "+ this.model + " is stopped");
 }

 const RedHondaAccord = new Car("red", "Honda", "Accord’ ");
 RedHondaAccord.drive(300);

 let initialVal =0;
 const nums = [1,2,3,4,5,6];
 const modulo3 =nums.reduce((prev,value,i, array) =>{
         return value %3 ==0 ?prev + 1 : prev;
 },initialVal);

 console.log(modulo3);

 const arrayUtils  = (function () {
     const multiplesCount = function (nums, base) {
           return nums.reduce((prev,value, i, array) => {
               return value %3 ==0 ? prev+1 : prev;
           },initialVal)
     }

     return{
         multiplesCount : function (nums,base) {
             return multiplesCount(nums,base);
         }
     }
 })();

 console.log(arrayUtils.multiplesCount([1,2,3,4,5,6],3));

 function findSecondBig(nums){
     if(nums.length <2)
         throw new Error("Invalid Array Size");

     let secondBig = Number.MIN_SAFE_INTEGER;
     let biggest = nums[0];
     for(let i=1; i<nums.length ;i++){
         if(nums[i] > biggest){
             secondBig = biggest;
             biggest = nums[i];
         }
         else if(nums[i] > secondBig && nums[i] < biggest){
             secondBig = nums[i];
         }
     }

     return secondBig !== Number.MIN_SAFE_INTEGER ? secondBig : "No Second big Number in the array";
 }

console.log(findSecondBig([0,1,1,1,1]));

 //Square of Sum
 const numArray = [1,2,3,4];
 let initilaValue =0;
 console.log(numArray.map((n1)=>n1*n1).
                     reduce((prev,value) =>prev+value,initilaValue));

 //Add function to the array
 const array = [];
 array.printTheName = function (name) {
      console.log(name);
 }

 array.printTheName("Anna H. Smith");

 function reverseInPlace(arr) {
   return swap(arr);
 }

 function swap(arrElem){
     let n= arrElem.length;
     let middle = n/2;
     n= n-1;
     for(let i=0 ; i<middle; i++){
         let temp = arrElem[n-i];
         arrElem[n-i] = arrElem[i];
         arrElem[i] = temp
     }
     return arrElem
 }

 console.log(reverseInPlace([1,2,3]));

 function strReverseInPlace(str) {
    str = str.split("");
    str = swap(str);
    return  str.join("");
 }

 console.log(strReverseInPlace("abcde"))