
function Person(name,age){
    this.name="hahahahha";
    this.age=age;
}

Person.prototype.showInfos = function(){
    console.log("İsim:"+ this.name+ "Yaş"+ this.age);
}

// const person = new Person("Efe",22);
// console.log(person);

function Employee(name,age,salary){
    // this.name = name;
    // this.age = age;
    Person.call(this,name,age);// person ile çağırdığım için person'un this ini alacak
    this.salary = salary;
}
 
Employee.prototype= Object.create(Person.prototype);//1.Employee objesi 2.Emp protosu 3.Person Protosu 4.object literal
Employee.prototype.toString = function(){
    console.log("Employee");// object literaldaki function ı tekrar tanımlayabiliriz
}

//Overriding
Employee.prototype.showInfos = function (){
    console.log("İsim:"+ this.name+ "Yaş"+ this.age+"Maaş:"+ this.salary);

}

const emp= new Employee("Efe","22",4000);

// emp.showInfos();
// emp.toString();
console.log(emp);