// id'ye göre seçme

let element;

element= document.getElementById("todo-form");//yanlış seçersem null döner
element= document.getElementById("tasks-title");

//Element Class'a göre seçme

element = document.getElementsByClassName("list-group-item");
element = document.getElementsByClassName("card-header");

// Element Tag'e Göre Seçme

element = document.getElementsByTagName("div");

// Query Selector - Css Selector - Tek Bir Element

element = document.querySelector("#todo-form");
element = document.querySelector("#tasks-title");


element = document.querySelector(".list-group-item");

element = document.querySelector("li");//sayfada bulduğu ilk li elementini getirecek
element = document.querySelector("div");

// QuerySelectorAll - Tüm Elementleri Seç
element = document.querySelectorAll(".list-group-item"); // Node List

element.forEach(function(el){//elementleri seçtikten sonra style verebiliriz
    console.log(el);

});




console.log(element);