
// Event Bubbling

// document.querySelector(".container").addEventListener("click",function(){
//     console.log("Div Container");

// });
// document.querySelector(".card.row").addEventListener("click",function(){
//     console.log("Card Row");
    
// });
// document.querySelectorAll(".card-body")[1].addEventListener("click",function(){
//     console.log("Card Body");
    
// }); // h5(Todolar)'e bastığım zaman event yukarılara da taşınmış oluyor 


// Event Capturing or Delegation

const cardbody= document.querySelectorAll(".card-body")[1];

cardbody.addEventListener("click",run);//  x in nerde olduğunu bilirsem todo1 i dinamik olarak silebilirim
                                        // yeni gelen todo5 e dinamik olarak event atamak için
function run(e){
    if(e.target.className == "fa fa-remove"){
        console.log("silme işlemi");
    }
    if(e.target.id == "filter"){
        console.log("Filtreleme işlemi");
    }
    if(e.target.id=="clear-todos"){
        console.log("Tüm taskları silme işlemi");
    }
}