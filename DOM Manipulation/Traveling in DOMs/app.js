let value;

const todoList = document.querySelector(".list-group");// ul yi alıyor
const todo =document.querySelector(".list-group-item:nth-child(2)");// class'ı list group item olan li'lerin 2. child'ı
const cardrow= document.querySelector(".card.row"); //2 tane class olduğu için 2 tane selector uyguladım

value= cardrow;


console.log(value);

//Childe Nodes - text dahil

value =todoList.childNodes;
//value = todoList.childNodes[0];// her gördüğü li yi node olarak alıyor, yan yana yazarsam almayacak

//Children - text almayacak, Element

value = todoList.children;
value = todoList.children[0];
value = todoList.children[todoList.children.length-1];
value = todoList.children[2].textContent="Değişti";


value= cardrow;
value= cardrow.children;
value= cardrow.children[2].children[1].textContent="Burasıda Değişti";//grandchildren


value = todoList;
value = todoList.firstElementChild;
value = todoList.lastElementChild;
value = todoList.children.length;
value = todoList.childElementCount;

value= cardrow;
value= cardrow.parentElement;
value= cardrow.parentElement.parentElement;


// Element Kardeşleri

value = todo;

value = todo.previousElementSibling;
value = todo.nextElementSibling;
value = todo.nextElementSibling.nextElementSibling;

value = todo.previousElementSibling.previousElementSibling;//null

console.log(value);
