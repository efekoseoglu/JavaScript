// Tüm elementleri seçme,2 tane todo1 eklenmemesini sağla

const form = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo");
const todoList = document.querySelector(".list-group");//ul
const firstCardBody = document.querySelectorAll(".card-body")[0];
const secondCardBody = document.querySelectorAll(".card-body")[1];
const filter = document.querySelector("#filter");
const clearButton = document.querySelector("#clear-todos");

EventListeners();

function EventListeners(){// Tüm event listenerlar
    form.addEventListener("submit",addTodo);
    document.addEventListener("DOMContentLoaded",loadAllTodosToUI);
    secondCardBody.addEventListener("click",deleteTodo);
    filter.addEventListener("keyup",filterTodos );
    clearButton.addEventListener("click",clearAllTodos);
}

function clearAllTodos(e){
    //Arayüzden Todo temizleme
    if(confirm("Tümünü silmek istediğinizi emin misiniz?")){
       // todoList.innerHTML="";// yavaş

        while(todoList.firstElementChild != null){
        todoList.removeChild(todoList.firstElementChild);
        }
        localStorage.removeItem("todos");// local storage dan silmek için
    }
}

function filterTodos(e){// yazmasak bile bazı functionlar otomatik olarak gönderir

  const filterValue = e.target.value.toLowerCase();
  const listItems = document.querySelectorAll(".list-group-item");// bütün li leri seçip üstünde arayacağız

  listItems.forEach(function(listItem){

    const text = listItem.textContent.toLowerCase();// text in içinde filter value geçiyorsa göster geçmiyorsa gösterme

    if(text.indexOf(filterValue)===-1){
        //bulamadı

        listItem.setAttribute("style","display: none !important");// sayfada yer alacak ancak gözükmeyecek
    }                                                             //dflex(boostrap) display: none ı baskıladığı için !important kullandık
    else{
        listItem.setAttribute("style","display: block") 
    }
  })

}

function deleteTodo(e){

    if(e.target.className=== "fa fa-remove"){
        e.target.parentElement.parentElement.remove();// bütün li yi seçip silmek için
        deleteTodoFromStorage(e.target.parentElement.parentElement.textContent);
        showAlert("success","Todo başarıyla silindi");
    }

    
}

function deleteTodoFromStorage(deletetodo){

    let todos = getTodosFromStorage();

    todos.forEach(function(todo,index){
        if(todo === deletetodo){
            todos.splice(index,1);// indexten itibaren değerleri sil arrayden
        }
    });

    localStorage.setItem("todos",JSON.stringify(todos));
}

function loadAllTodosToUI(){
    let todos = getTodosFromStorage();

    todos.forEach(function(todo){  

        addTodoToUI(todo);//local storage deki todoların alınması 
      })
}

function addTodo(e){

    const newTodo = todoInput.value.trim();//stringde baştaki ve sondaki boşlukları silmek için 

    if(newTodo === ""){

        /*<div class="alert alert-danger" role="alert">
        This is a danger alert—check it out!
        </div>*/

        showAlert("danger","Lütfen bir todo girin...");
    }
    else {
        addTodoToUI(newTodo);
        addTodoToStorage(newTodo);
        showAlert("success","Başarıyla Todo eklendi...")

    }


    e.preventDefault();
}

function getTodosFromStorage(){

    let todos;

    if(localStorage.getItem("todos")=== null) {
        todos =[];//yoksa boş bi şekilde başlatıyoruz
    }
    else {
        todos= JSON.parse(localStorage.getItem("todos"));// varsa alıyoruz
    }

    return todos;

}

function addTodoToStorage(newTodo){
    let todos = getTodosFromStorage();

    todos.push(newTodo);

    localStorage.setItem("todos",JSON.stringify(todos));//array i string hale çevirmek için
}


function showAlert(type,message){
    const alert = document.createElement("div");
    alert.className = `alert alert-${type}`;//type gönderilecek
    alert.textContent = message;

    console.log(alert) //alert oluşturuldu karta eklenmesi gerekiyor

    firstCardBody.appendChild(alert);
    
    //setTimeout

    setTimeout(function(){//2 tane değer alıyor
        alert.remove();
    },1000)

}


function addTodoToUI(newTodo){ // String değerini list item olarak UI'ya ekleyecek.
    /*
    <li class="list-group-item d-flex justify-content-between">
                            Todo 1
                            <a href = "#" class ="delete-item">
                                <i class = "fa fa-remove"></i>
                            </a>
                        </li>
    */

   // List Item Oluşturma

   const listItem = document.createElement("li");//yorumdaki görünümü kazandırmaya çalışıyorum
   
   // Link oluşturma
   
   const link = document.createElement("a");
   link.href = "#";
   link.className = "delete-item";
   link.innerHTML = "<i class = 'fa fa-remove'></i>";

   listItem.className = "list-group-item d-flex justify-content-between";

   // Text Node Ekleme

   listItem.appendChild(document.createTextNode(newTodo));//Todo1 kısmı,TextNode listItem'ın child'ı old için böyle ekleyebilirim
   listItem.appendChild(link);// a kısmı, buradan sonra listItem oluşturuldu ancak ul ye eklenmesi lazım

   // Todo List'e List Item'ı ekleme

   todoList.appendChild(listItem);//ul'ye ekleme
   todoInput.value = "";// value'yi sıfırla


}