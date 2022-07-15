let value; 

const programmer={
    name:"Efe Köseoğlu",
    age:22,
    email:"koseogluefe37@gmail.com",
    langs:["python","java","javascript"],
    adress:{
        city:"Adana",
        street:"Mahfesığmaz",
    },

    work : function(){
        console.log("Programmer working...");
    }
}

value=programmer;

value.programmer.email;
value.programmer["email"];

value.programmer.adress.city;
programmer.work();

const programmers=[ 
    {name:"efe",age:22},
    {name:"şafak",age:32}
];

value.programmers[0].name;

console.log(value);

