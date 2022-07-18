const filter= document.getElementById("filter");

console.log(filter);

// document.addEventListener("DOMContentLoaded",load);


// function load(e){
//     console.log("Sayfa Yüklendi");

// }

// Focus
// filter.addEventListener("focus",run);
// // Blur
// filter.addEventListener("blur",run);

// Paste 
// filter.addEventListener("paste",run);
// Copy
// filter.addEventListener("copy",run);//kopyalandığında event oluşsun

// Cut
// filter.addEventListener("cut",run);

// Select

 filter.addEventListener("select",run);


function run(e) {
    console.log(e.type);

}