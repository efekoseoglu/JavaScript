
class Matematik {
    square(x){
        console.log(x*x);
    }
    static cube(x) {// static yazdığım zaman obje oluşturmadan method'u kullanabiliyorum
        console.log(x*x*x);//static method lar class ın prototipine yazılmıyor,obje üzerinden erişemem
    }                       //sadece sınıf üzerinden erişim
}

// const math = new Matematik();
// Matematik.cube(3);
//math.cube(3);// çalışmaz

// math.sqrt(4);
// Matematik.sqrt(5);//çalışmaz,obje lazım

// Object.create();// create static yazılmış diyebiliriz

console.log(Math.square(4));//önceden tanımlı Math class ı içinde square static yazılmış,objesiz erişim