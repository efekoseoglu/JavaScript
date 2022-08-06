function Storage(){

}


Storage.prototype.addFilmToStorage= function(newFilm){
    let Films=this.getFilmsFromStorage();

    Films.push(newFilm);
    localStorage.setItem("Films",JSON.stringify(Films));// array'i string hale çevirmek için
}

Storage.prototype.getFilmsFromStorage= function(){

    let Films;

    if(localStorage.getItem("Films")===null){
        Films=[];
    }
    else{
        Films=JSON.parse(localStorage.getItem("Films"));//array haline çevirmek için
    }
    
    return Films;
}

Storage.prototype.deleteFilmsFromStorage = function(FilmTitle){

    let Films= this.getFilmsFromStorage();

    Films.forEach(function(Film,index){
        if(Film.title===FilmTitle){
            Films.splice(index,1);// arrayden silmek için
        }
    });

    localStorage.setItem("Films",JSON.stringify(Films));// key verirken aynı olmasına dikkat
}

Storage.prototype.clearAllFilmsFromStorage = function(){
    localStorage.removeItem("Films");
}
