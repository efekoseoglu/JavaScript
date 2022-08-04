
// bir obje oluştururken prototipini başka bir objeden almak istiyorsak object.create()

// const obj = {
//     test1:function(){
//         console.log("Test 1");
//     },
//     test2:function(){
//         console.log("Test 2");
//     }
// }
// // console.log(obj);

// const emp = Object.create(obj);// emp in proto özelliği obj i göstermiş oldu, kalıtım için

// emp.name="efe";
// emp.age="22";
// console.log(emp);

function Person(){


}

Person.prototype.test1= function(){
    console.log("test1");
}

Person.prototype.test2= function(){
    console.log("test2");
}

function Employee(name,age){
    this.name= name;
    this.age= age;
}

Employee.prototype= Object.create(Person.prototype)// Employee nin proto özelliğini person protosundan oluşturduk
Employee.prototype.myTest =function(){
    console.log("my test")
}

const emp = new Employee("Efe",22);

emp.test1();// hem persondan hem object ten kalıtım yapmış oldu
console.log(emp);

