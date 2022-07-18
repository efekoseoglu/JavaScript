const filterInput= document.getElementById("filter");


// filterInput.onfocus = function(){// odaklandığım zaman function çalışacak
//     console.log ("hello");
// }

// filterInput.addEventListener("focus",function(e){/* e--> event */
//     console.log(e);
//     console.log(e.type);
//     console.log(e.target);
//     console.log(e.target.placeholder);
//     console.log(e.target.className);
// });


const todoForm = document.getElementById("todo-form");

todoForm.addEventListener("submit",submitForm);// submit olduğunda function çalışacak

function submitForm(event){

    console.log("Submit Eventi"); 
                                 
    event.preventDefault();// default olarak submit ediliyor, yenileniyor ama biz bunu istemiyorsak

}
