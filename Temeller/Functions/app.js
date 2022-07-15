

function merhaba (name="bilgi yok",age="bilgi yok"){

    // if(typeof name==="undefined") name= "bilgi yok";
    // if(typeof age==="undefined") name= "bilgi yok";
    console.log(`isim: ${name} yaş: ${age}`);

}

merhaba("efe",22);
merhaba("efe");

 function square(x) {
    return x * x;

    console.log("Naber"); // wont work
}
function cube(x) {
    return x*x*x;
}

let a = cube(square(12));

console.log(a);

//function expression

const merhaba1 = function(){
    console.log("merhaba"+name);
}

merhaba1("efe");

//immediately invoked function expression (IIFE)

(function(name){
    console.log("merhaba:", name );
})("efe");


const database = {
    host:"localhost",
    add: function(){
        console.log("eklendi");
    },
    get: function(){
        console.log("elde edildi")
    },
    update: function(id){
        console.log(`Id: ${id} Güncellendi`);
    },
    delete: function(id){
        console.log(`Id: ${id} Silindi`);
    }

}

console.log(database.host);

database.add();

database.delete(10)
