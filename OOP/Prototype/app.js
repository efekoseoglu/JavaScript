function Employee(name,age,salary){ //  Constructor
    this.name = name;
    this.age =age;
    this.salary = salary;

    // this.showInfos = function(){
    //     console.log("İsim: " + this.name + " Yaş: " + this.age);
    // }

}

Employee.prototype.showInfos = function(){
    console.log ("İsim: " + this.name + " Yaş: " + this.age)
}
const emp1 = new Employee("Efe",22,4000);
const emp2 = new Employee("Şafak",33,5000);

emp2.showInfos();

console.log(emp1);
console.log(emp2);

// her kullanıldığında yer kaplamaması için constructordaki method'u prototype'a yazarız
// aynı constructor ile oluşturulan bütün objeler aynı prototype'a bağlı 