
function Employee(name,age,salary){ //  Constructor
    this.name = name;
    this.age =age;
    this.salary = salary;

    //console.log(this);
    this.showInfos = function(){
        console.log(this.name,this.age,this.salary);
    }
    
}
const emp1 = new Employee("Efe",22,4000);
const emp2 = new Employee("Şafak",33,5000);

console.log(emp1);
console.log(emp2);