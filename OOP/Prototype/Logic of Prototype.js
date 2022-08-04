
// js prototype tabanlı bir dil
// class şeklinde yazsak bile arka planda prototype a dönüştürülür
// prototype objeler arası inheritance yapmamızı sağlar

const object = new Object(); // Object literal, en temel obje



function Employee(name,age,salary){ 
    this.name = name;
    this.age =age;
    this.salary = salary;

    // this.toString = function(){
    //     console.log("Object Literal'daki toString'i override etti");
    // }

    
}
const emp1 = new Employee("Efe",22,4000);
// her objenin bir tane prototype i var bu prototype de en temel objenin prototype ine sahip, prototype chain

console.log(emp1.toString());//toString ben yazmadım ama object literal'daki prototype da var



