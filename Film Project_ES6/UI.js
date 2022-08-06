class UI{

  static addFilmToUI (newFilm){
    /*
       <!-- <tr>
       <td><img src="" class="img-fluid img-thumbnail"></td>
       <td></td>
       <td></td>
       <td><a href="#" id = "delete-film" class = "btn btn-danger">Filmi Sil</a></td>
     </tr> -->*/ //bu şekilde bir yapı eklemek istiyorum
   
     const FilmList = document.getElementById("films");
   
     FilmList.innerHTML+=` 
       <tr>
           <td><img src="${newFilm.url}" class="img-fluid img-thumbnail"></td>
           <td>${newFilm.title}</td>
           <td>${newFilm.director}</td>
           <td><a href="#" id = "delete-film" class = "btn btn-danger">Filmi Sil</a></td>
       </tr>
     
     `;
   }
   
   static clearInputs=function(element1,element2,element3){
       element1.value="";
       element2.value="";
       element3.value="";
   }
   
   static displayMessages (message,type){
     const cardBody = document.querySelector(".card-body");//querySelectorAll(".card-body")[0];
     
     //Alert div'ini oluşturma
     const div = document.createElement("div");
   
     div.className= `alert alert-${type}`;// alert duruma göre değişecek, danger success 
     div.textContent=message;
     cardBody.appendChild(div);// cardbody'e eklemem gerekiyor
   
     setTimeout(function(){
       div.remove();
     },2000)
   }
   
   static loadAllFilms (Films){
   
     const FilmList = document.getElementById("films");
   
     Films.forEach(function(Film){
       FilmList.innerHTML +=`
       <tr>
           <td><img src="${Film.url}" class="img-fluid img-thumbnail"></td>
           <td>${Film.title}</td>
           <td>${Film.director}</td>
           <td><a href="#" id = "delete-film" class = "btn btn-danger">Filmi Sil</a></td>
       </tr>
   
       `;
     });
   
   }
   
   static deleteFilms (event){
   
     //  console.log(event.target.parentElement.previousElementSibling.previousElementSibling.textContent);
   
     if(event.target.id==="delete-film"){
       event.target.parentElement.parentElement.remove();
       Storage.deleteFilmsFromStorage(event.target.parentElement.previousElementSibling.previousElementSibling.textContent);
       UI.displayMessages("Silme işlemi başarılı...","success");
     }
   }
   
   static clearAllFilmsFromUI (){
   
     const FilmList=document.getElementById("films");
     //filmList.innetHTML ="";//yavaş
   
      while(FilmList.firstElementChild != null){//child olduğu sürece
       FilmList.firstElementChild.remove();
         
     }
   }
}


