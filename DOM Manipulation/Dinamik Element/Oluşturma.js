

// <a id = "clear-todos" class="btn btn-dark" href="#">Tüm Taskları Temizleyin</a>  

const newLink = document.createElement("a");
const cardbody = document.getElementsByClassName("card-body")[1];

newLink.id = "clear -todos";
newLink.className= "btn btn-danger";
newLink.href="https://www.google.com.tr";
newLink.target = "_blank";

// Text Content 

// cardbody.textContent ="hi"//böyle yazarsam içindeki bütün yazı gider

//Text Node 

// const text = document.createTextNode("helloThere");
// cardbody.appendChild(text);// en son child ı olarak eklemek istersem 

// console.log(newLink);



newLink.appendChild(document.createTextNode("Farklı Sayfaya Git"));// newLink e text eklemek için
cardbody.appendChild(newLink);

console.log(newLink);