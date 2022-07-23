//Setler - Kümeler ,1 değeri sadece 1 defa taşıyor

const myset = new Set();

myset.add(100);
myset.add(100);// hata vermez yazılmaz
myset.add(3.14);
myset.add("Efe");
myset.add(true);
myset.add([1,2,3]);
myset.add({a:1,b:2});

const myset2 = new Set([100,3.14,"Efe"]);

// console.log(myset);
// console.log(myset2);

// Size
// console.log(myset.size);

// Delete Metodu

// myset.delete("Efe");

// Has Metodu

// console.log(myset.has("Efe"));
// console.log(myset.has(3.14));
// console.log(myset.has(2000));
// console.log(myset.has([1,2,3]));// false farklı objeler old için

// For Each

// myset.forEach(function(value){
//     console.log(value);
// })

// For Of 

// for (let value of myset){
//     console.log(value);
// }

const array = Array.from(myset);//array oluşturmak için

console.log(array);