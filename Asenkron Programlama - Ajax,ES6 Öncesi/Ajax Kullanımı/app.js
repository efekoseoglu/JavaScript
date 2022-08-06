// Http Status
// 200 : OK
// 403 : Forbidden
// 404 : Not Found
// 505 : Internal Server Error
// Holds the status of the XMLHttpRequest.
// 0: request not initialized 
// 1: server connection established
// 2: request received 
// 3: processing request 
// 4: request finished and response is ready

document.getElementById("btn").addEventListener("click",function(){
    //XMLHttpRequest

    const xhr =new XMLHttpRequest();

    xhr.onprogress= function(){
        console.log("Process İşleniyor...",this.readyState);// ready state 3 old çalışacak
    }
    xhr.onload = function(){// sadece ready state 4 old. çalışacak
        if(this.status===200){// hata olmasın diye kontrol ettik
            document.getElementById("ajax").textContent=this.responseText
        }
    }

    // xhr.onreadystatechange = function(){// xhr içindeki ready state değiştikçe bu function çalışacak

    //     // console.log(this.readyState);//yukarda verilen 1234 sırayla çalıştırılacak
    //     // console.log(this.status);// ilk başta request göndermiyor (0) sonra diğer aşamalarda 200 yazdırıyor url mevcut

    //     if(this.status==200 && this.readyState==4){// url varsa (200) ve response ready ise 
    //         //response hazır 
    //         console.log(this.responseText);
    //     }
    // }


    xhr.open("GET","example.txt",true);//bağlantı kurmak için
    // server tarafına veri göndermek için POST request kullanılır string göndermek lazım POST ile

    xhr.send();
})