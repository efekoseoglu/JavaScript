//Break ve Continue

let i = 0;

while (i < 10) { 

    if (i == 3 || i == 5){
        i++;//otherwise infinite loop
        continue;
        
    }
    console.log(i);
    i++;
}

// Do While

// let i = 0;

// do {
//     console.log(i);
//     i++;


// }while(i < 10);


// const langs = ["Python","Javascript","Java"];

// let index=0;

// while(index<langs.length){
//     console.log(langs[index]);
    
//     index++;
// }

// for (let index = 0;index < langs.length;index++){

//         console.log(langs[index]);
    
//     }

// langs.forEach(function(lang,index){ //callback methods

//     console.log(lang,index);
// });

const users =[
      {name:"efe",age:22},
      {name:"şafak",age:32},
      {name:"serpil",age:58}
];

const names =users.map(function(users){
    return users.name;
 });

const ages = users.map(function(user){
    return user.age;
});

console.log(names);
console.log(ages);

const user= {
    name:"efe",
    age:22,
 };

 for (let key in user){
    console.log(key,user[key]);
 }




