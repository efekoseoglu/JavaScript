// Local Storage

// silinmediği taktirde sekme kapansa bile değerler kalacak
// değerler string olarak kaydedilir, int bile yazılsa

// SetItem

// localStorage.setItem("hareket", "burpee");
// localStorage.setItem("tekrar", 50);
// Get Item

// const value = localStorage.getItem("tekrar");
// console.log(value);
// console.log(typeof value);

// Clear Local Storage

// localStorage.setItem("hareket", "burpee");
// localStorage.setItem("tekrar", 50);

// console.log(localStorage.getItem("sport"));

// if (localStorage.getItem("hareket") === null){
//     console.log("Sorguladığınız veri bulunmuyor");

// }
// else {
//     console.log("Sorguladığınız veri bulunuyor");

// }


// Local Storage - Array yazma

const todos = ["Todo 1", "Todo 2","Todo 3"];

//localStorage.setItem("todos",todos);// string olarak yazdı hepsini

//localStorage.setItem("todos", JSON.stringify(todos));// array gibi yazmak için

// const value = JSON.parse(localStorage.getItem("todos"));// array gibi yazılan string'in içindeki değerleri arraye dönüştürmek için
// console.log(value);


const form = document.getElementById("todo-form");
const todoInput = document.getElementById("todo");


form.addEventListener("submit",addTodo);

function addTodo(e){
    const value = todoInput.value;// o anki girilen value'i almak için 

    let todos;// ilk başta key burda var mı kontrol etmem lazım

    if (localStorage.getItem("todos") === null) {//varsa null olarak başlatmak istiyorum
        todos = [];
    }
    else {
        todos = JSON.parse(localStorage.getItem("todos"));// değer varsa JSON.parse ile array olarak alabilirim
    }

    todos.push(value);// value'yi array e ekledim


    localStorage.setItem("todos", JSON.stringify(todos));// todos u tekrardan eklemem gerekiyor, arraymiş gibi yazdırmak için 

    e.preventDefault();// sayfada kalmak için
}


