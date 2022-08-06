class Storage{

    static addFilmToStorage (newFilm){
        let Films=this.getFilmsFromStorage();
    
        Films.push(newFilm);
        localStorage.setItem("Films",JSON.stringify(Films));// array'i string hale çevirmek için
    }
    
    static getFilmsFromStorage (){
    
        let Films;
    
        if(localStorage.getItem("Films")===null){
            Films=[];
        }
        else{
            Films=JSON.parse(localStorage.getItem("Films"));//array haline çevirmek için
        }
        
        return Films;
    }
    
    static deleteFilmsFromStorage (FilmTitle){
    
        let Films= this.getFilmsFromStorage();
    
        Films.forEach(function(Film,index){
            if(Film.title===FilmTitle){
                Films.splice(index,1);// arrayden silmek için
            }
        });
    
        localStorage.setItem("Films",JSON.stringify(Films));// key verirken aynı olmasına dikkat
    }
    
    static clearAllFilmsFromStorage (){
        localStorage.removeItem("Films");
    }
}


