//String Methods
let value;

const firstname="Efe";
const lastname="Köseoğlu";

const langs="java,python,c++";

value= firstname + lastname;
value= firstname + " " + lastname;

value+= "js"

value=firstname.length;

value=firstname.concat(" ",lastname," ","hehe");

value=firstname.toLowerCase();
value=firstname.toUpperCase();
value=firstname[firstname.length-1];

//index of

value=firstname.indexOf("f");
value=lastname.indexOf("ğ");
value=lastname.indexOf("a");//-1 no results

//char at

value=lastname.charAt(0);
value=lastname.charAt(lastname-1);

//split 

value=langs.split(",");

//replace

value= langs.replace("python","css")

//includes

value=langs.includes("java");
value=langs.includes("xD");//false



console.log(value);

