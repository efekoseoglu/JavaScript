//console.log(this.alert("merhaba"))



if(confirm("emin misiniz?"))
    console.log("delete");
else console.log ("dont delete");


cevap =prompt("2+2=?");

if(cevap="4") console.log("doğru")
else console.log("yanlış");

let value;

value = window;
value = window.location;
value = window.location.host;
value = window.location.hostname;
value = window.location.port;
value = window.location.href;

if (confirm("Sayfa yenilensin mi?")) 
    window.location.reload();
else 
    console.log("sayfa yenilenmedi");

 console.log(value);


value = window.outerHeight;
value = window.outerWidth;


value = window.innerHeight;
value = window.innerWidth;


value = window.scrollX;

value = window.scrollY;

console.log(value);

