/**
 *WAP Lab revision exercise
 **/

"use strict";
//window.onload = function() {
    const person = {
        name: "",
        dateOfBirth: "",
        getName: function () {
            return this.name;
        },
        setName: function (name) {
            this.name = name;
        },
        toString: function () {
            return this.name + " was born in " + this.dateOfBirth;
        }
    }

    const john = Object.create(person);
    john.setName("John");
    john.dateOfBirth = "1998-12-10";
    console.log(john.toString());

    const employee = {
              salary : 0,
              hireDate: new Date(),
              __proto__: person,
              doJob: function (jobTitle) {
                  let formattedSalary = '$' + this.salary.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
                 console.log(this.getName() +" is a "+jobTitle +" who earns "+ formattedSalary);
              }
    }

    const anna = Object.create(employee);
    anna.setName("Anna");
    anna.salary=249995.50;
    anna.doJob("Programmer");
//}

function Person(name, dateOfBirth) {
    this.name = name;
    this.dateOfBirth = dateOfBirth;
    this.toString = function f() {
        return "Name : "+this.name +", DateOfBirth: " + this.dateOfBirth;
    }
}
const peter = new Person();
peter.name = "Peter";
peter.dateOfBirth ="1998-12-10"
console.log(peter.toString());

//////Lab 8
var xx =1;
var a =5;
var b = 10;
var c = function (a,b,c) {
            console.log(xx);
            console.log(a);
            const f = function (a,b,c) {
                 b=a;
                 console.log(b);
                 b =c;
                 var xx=5;
            }
            f(a,b,c);
            console.log(b);
}
c(8,9,10);
console.log(b);
console.log(xx);

//Q4
 const count = (function () {
          let counter =0;
          const add = function () {
                  return counter ++;
          }
          const reset = function () {
                 return counter =0;
          }
          return{
                add: add,
                reset: reset
          }
})();

 count.add();
 count.add();
 console.log(count.reset());

 const make_adder = function (inc) {
    let counter=0;
    return function(){
        counter +=inc;
        console.log(counter);
        return counter;
    }
 }
 const add5 = make_adder(5);
 add5();
 console.log(add5());

 //Q10

const employee2 = (function () {
   let name ="";
   let age = 0;
   let salary =0.0;
   const getAge = function () {
          return age;
    }
    const getSalary = function () {
         return salary;
    }
    const getName = function () {
          return name;
    }
    return{
       setAge: function (newAge) {
               age = newAge;
       },
        setSalary : function (newSalary) {
               salary = newSalary;
        },
        setName : function (newName) {
               name = newName;
        },
        increaseSalary : function (percentage) {
              return salary = (getSalary()/percentage) + getSalary();
        },
        incrementAge: function () {
                return age = getAge()+1;
        }
    }

})();

employee2.setName("John");
employee2.setAge(23);
employee2.setSalary(25000);
console.log(employee2.increaseSalary(10));
console.log(employee2.incrementAge());
employee2.address = "";
employee2.setAddress = function (newAddress) {
          this.address = newAddress;
}
employee2.getAddress = function () {
        return this.address;
}

employee2.setAddress("1000 North Street");
console.log(employee2.getAddress());

const strs = "abcd";
console.log(strs.indexOf("c"));

function sum(arry) {
   let initValue = 0;
   return arry.reduce((num1,num2,i, array) =>num1+num2, initValue);
}
console.log(sum([1,2,3,4]));

function multiply(arry) {
  let initValue = 1;
  return arry.reduce((num1,num2, i, array)=>num1*num2, initValue);
}

console.log(multiply([1,2,3,4]));

function  inlineRevers(strs) {
   strs = strs.split("");
   let n = strs.length;
   let middle = n/2;
   n = n-1;
   for (let i=0; i<middle; i++){
       let temp = strs[i];
       strs[i] = strs[n-i];
       strs[n-i] = temp;
   }
   return strs.join("");
}

console.log(inlineRevers("abcde"));

function findLongestWord(strArr) {
   return  strArr.reduce(function (prev,elem,i,array) {
        return prev.length > elem.length ?prev : elem;
    }).length;
}

//console.log(findLongestWord(["acb","sdfg","werty"]));
console.log(findLongestWord(["acb","sdfg","werty"]));

function  filterLongWords(strArr, size) {
    return strArr.filter((value,i,array)=>value.length >size);
}

console.log(filterLongWords(["abc", "asdf", "werty"],3));

const test = {
    fName: "AnnaTest",
    getFName : function () {
          console.log(this);
         const  changeName = (newName)=> console.log(this);
         changeName("TestBob");
         return this.fName;
    }
}
console.log(test.getFName());