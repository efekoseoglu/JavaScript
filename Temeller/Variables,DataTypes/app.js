// var a = 20;
// var b = 10;
// var c = 40;

// console.log(a,b,c);

//Primitive

var a=10; //number veri tipi
var b=3.10
console.log(typeof a);
console.log(typeof b);

var name="Efe";

var c= true;
var d= null;

console.log(d);
console.log(typeof d);//C deki pointer gibi gördüğü için type ı object gösteriyor
                      // null variable counting as a pointrer in C, so defined as object

//Reference Veri tipleri

var numbers = [1,2,3,4,5];

console.log(numbers);
console.log(typeof numbers);

var person = {
    name: "efe",
    age:"22",
}

var date =new Date ();

var merhaba =function (){
    console.log("merhaba");
}
      
var a =10;
var b= a;
console.log(a,b);
a=20;
console.log(a,b);

var a = [1,2,3];// a, referencing the initial position of array 
var b = a;

a.push(4);

console.log(b)