const cardBody = document.querySelectorAll(".card-body")[1];//2.cardbody seçmek istiyorum,2 tane class old. için All ile seçtik 

const title =document.querySelector("#tasks-title");

//Clink Event

// title.addEventListener("click",run);

// Double Click 
// title.addEventListener("dblclick",run);


//Mouse Down
// title.addEventListener("mousedown",run);
// Mouse Up
// title.addEventListener("mouseup",run);// basılı tutmayı bıraktığım zaman oluşacak

// Mouse Over
// title.addEventListener("mouseover",run);// üzerine geldiğim zaman
// // Mouse Out
// title.addEventListener("mouseout",run);

// cardBody.addEventListener("mouseover",run);// cardBody de farklı elementlere girdiği içinde oluşacak
// cardBody.addEventListener("mouseout",run);// cardBody deki elementlerden çıkarken de oluşacak

// Mouse Enter ve Mouse Leave

cardBody.addEventListener("mouseenter",run);// sadece cardBody'ye girdiğim zaman çalışacak
cardBody.addEventListener("mouseleave",run);// sadece çıktığım zaman


function run(e){
    console.log(e.type);
}