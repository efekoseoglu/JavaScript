let value;


//veri tiplerini string'e çevirme

value=String(123);
value=String(3.14);
value=String(true);
value=String(false);
value=String(function() {console.log()});
value=String([1,2,3,4,5]);

value =(10).toString();

//veri tiplerini sayılara çevirme

value= Number("123");
value= Number("null");
value= Number("undefined");// not a number 

value =parseFloat("3.14");
value = parseInt("3");

console.log(value);
console.log(typeof value);

const a ="hello" + 37;
const b =Number("34")+ 53;

console.log(a,b);
console.log(typeof a,b);


