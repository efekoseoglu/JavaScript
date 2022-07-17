const todoInput = document.getElementById("todo");
let element;


element = todoInput;
element = todoInput.classList;
element = todoInput.classList.length;//=1 tane class var

// todoInput.className="form-control newClass";

// todoInput.classList.add("newClass");
// todoInput.classList.add("newClass2");         //582dk=9s 42dk +18 saat,27s 42dk ,react a kadar
// todoInput.classList.remove("form-control");   // 274=4s+34 dk+ 6saat,10s 34dk,mongo db den sonra
 


element = todoInput;
element = todoInput.placeholder;
element = todoInput.getAttribute("placeholder");
todoInput.setAttribute("placeholder","Naber");
todoInput.setAttribute("title","Input");
todoInput.removeAttribute("name");

element = todoInput;
// element = todoInput.hasAttribute("name");

console.log(element);                                              