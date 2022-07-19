// Session Storage - Key ve Value

// session storage sekme kapandığı an önceden girilen değerler gidecek
//console.log(window);// session storage window objesi içerisinde



// Butonları Seçmek

const add = document.querySelector("#add");
const del = document.querySelector("#delete");
const clear = document.querySelector("#clear");

// Inputlar

const addkey = document.querySelector("#addkey");
const addvalue = document.querySelector("#addvalue");
const deletekey = document.querySelector("#deletekey");

add.addEventListener("click",addItem);
del.addEventListener("click",deleteItem);
clear.addEventListener("click",clearItems);

function addItem(e) {
    sessionStorage.setItem(addkey.value, addvalue.value);// key'i ve ona karşılık gelen değeri ekleyecek
}                                                        // var olan bir element eklersek güncellenir   

function deleteItem(e) {
    sessionStorage.removeItem(deletekey.value);

}

function clearItems(e) {
    sessionStorage.clear();
}