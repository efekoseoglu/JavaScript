//keypress
// document.addEventListener("keypress",run);

// function run(e){
//     // console.log(e.which);//return ASCII table value of the key
//     console.log(e.key);
// }

// keydown
// document.addEventListener("keydown",run);//bastığım anda bütün tuşları gösterek

// function run(e){
//     // console.log(e.which);
//     console.log(e.key);
// }


// keyup

// document.addEventListener("keyup",run);// tuşu bıraktığım anda oluşan event

// function run(e){
//     // console.log(e.which);
//     console.log(e.key);
// }

const header = document.querySelector(".card-header");
const todoInput = document.querySelector("#todo");// id'si todo olan

todoInput.addEventListener("keyup",changeText);

function changeText(e){

    header.textContent =e.target.value;

    // console.log(e.target);//eventin nerde oluştuğunu görmiş oldum
    // console.log(e.target.value);// içindeki value'yi aldı
}