const form = document.getElementById("film-form");
const titleElement=document.querySelector("#title");
const directorElement=document.querySelector("#director");
const urlElement=document.querySelector("#url");
const cardBody=document.querySelectorAll(".card-body")[1];
const clearFilms=document.querySelector("#clear-films");


//UI objesini başlatma

const ui= new UI;

//Storage Objesi Üretme
const storage = new Storage();

//Tüm eventleri yükleme

eventListeners();

function eventListeners(){
    form.addEventListener("submit",addFilm);
    document.addEventListener("DOMContentLoaded",function(){
        let Films=storage.getFilmsFromStorage();
        ui.loadAllFilms(Films);
    });
    cardBody.addEventListener("click",function(){
        ui.deleteFilms(event);

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
        ui.clearAllFilmsFromUI();
        storage.clearAllFilmsFromStorage();
    }
}

function addFilm(e){
    const title =titleElement.value;
    const director= directorElement.value;
    const url =urlElement.value;

    if(title==="" || director==="" || url===""){// herhangi biri boş ise hata
        ui.displayMessages("Tüm alanları doldurun...","danger");
    }
    else{
        //Yeni film
        const newFilm =new Film(title,director,url)

        ui.addFilmToUI(newFilm);// Arayüze film ekleme
        storage.addFilmToStorage(newFilm);// Storage'a film ekleme
        ui.displayMessages("Film başarıyla eklendi","success");
    }

        ui.clearInputs(titleElement,urlElement,directorElement);
        e.preventDefault();
}