const form = document.getElementById("film-form");
const titleElement=document.querySelector("#title");
const directorElement=document.querySelector("#director");
const urlElement=document.querySelector("#url");
const cardBody=document.querySelectorAll(".card-body")[1];
const clearFilms=document.querySelector("#clear-films");

//Tüm eventleri yükleme

eventListeners();

function eventListeners(){
    form.addEventListener("submit",addFilm);
    document.addEventListener("DOMContentLoaded",function(){
        let Films=Storage.getFilmsFromStorage();
        UI.loadAllFilms(Films);
    });
    cardBody.addEventListener("click",function(){
        UI.deleteFilms(event);

    });
    clearFilms.addEventListener("click",clearAllFilms);
}

// function clearAllFilms(e){
//     if(confirm("Tüm Filmleri silmek istediğinize emin misiniz?")){

//         while(cardBody.firstElementChild !=null){
//             cardBody.removeChild(cardBody.firstElementChild);
//         }
//         localStorage.removeItem("Films");
//     }
// }

function clearAllFilms(e){

    if(confirm("Tüm Filmleri silmek istediğinize emin misiniz?")){
        UI.clearAllFilmsFromUI();
        Storage.clearAllFilmsFromStorage();
    }
}

function addFilm(e){
    const title =titleElement.value;
    const director= directorElement.value;
    const url =urlElement.value;

    if(title==="" || director==="" || url===""){// herhangi biri boş ise hata
        UI.displayMessages("Tüm alanları doldurun...","danger");
    }
    else{
        //Yeni film
        const newFilm =new Film(title,director,url)

        UI.addFilmToUI(newFilm);// Arayüze film ekleme
        Storage.addFilmToStorage(newFilm);// Storage'a film ekleme
        UI.displayMessages("Film başarıyla eklendi","success");
    }

        UI.clearInputs(titleElement,urlElement,directorElement);
        e.preventDefault();
}