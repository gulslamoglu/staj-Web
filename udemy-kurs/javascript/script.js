// let users=[
//     {firstName:"Aslı", lastName:"Yılmaz"},
//     {firstName:"kerem", lastName:"bilgin"},
//     {firstName:"tolga", lastName:"mertoğlu"},
//     {firstName:"selin", lastName:"şahin"},
// ];

// for(let i=0; i<users.length;i++){
//     console.log(users[i].firstName);
// }

// for(let i in users){
//     console.log(`index: ${i} value: ${users[i].lastName}`);
// }

//map diziyi geri döndürür.
    
// let veri = users.map(function(item){
//     return item.firstName+ " " +item.lastName;
// });
// console.log(veri);


//karelerini alıp ekrana yazdırma
// let numbers = [1,3,5,9,12];

// let num = numbers.map(function(n){
//     return n*n;
// });

// console.log(num);


// FONKSİYONLAR
// function merhaba(){
//     console.log("merhaba");
// }
// merhaba();


// function merhaba(name,age){
//     console.log(`isim: ${name} yaş: ${age}`);
// }
// merhaba("gül",23);


// function yasHesapla(yil){
//     let yas= (2024-yil);
//     console.log(yas);
// }
//yasHesapla(2001);


// function ehliyetAlabilmeDurumu(dogumYili,isim){
//     let yas = yasHesapla(dogumYili);
//     let ehliyet = (18 - yas);

//     if(ehliyet>0){
//         console.log(`${isim} ehliyet alabilmenize ${ehliyet} yıl kaldı.`);
//     }
//     else{
//         console.log(`${isim} ehliyet alabilecek yaşa sahipsiniz.`);
//     }
// }

// ehliyetAlabilmeDurumu(2001, "Gül");



// WINDOW OBJESİ

// veri = window;
// console.log(veri);

//alert: kullanıcıya verilecek mesaj
// alert("merhaba");

//prompt: kullanıcıdan veri almak için
// var veri2 = prompt("Adınızı Giriniz:");

//confirm: kullanıcıdan evet hayır diye cevaplamasını istediğimizde
// veri3 = confirm("Çıkmak istediğinize emin misiniz?");


//location bilgilerini almak için
// veri = window.location;
// console.log(veri);

//siteye yönlendirmek için
//window.location.href="https://www.udemy.com";
// window.location.reload();


//SCOPE: oluşturduğumuz değişkenin nerelerde kullanıldığını belirtir.
//global scope: genel anlamda tanımladığımız değişkenleri kapsar
//function scope: fonksiyon içinde oluşturulan değişkenş kapsar.

// var veri1 = 5; //global 
// let veri2 =10;
// const veri3=15;

// function fonksiyon(){
//     var veri1 = 30;
//     let veri2 = 40;
//     const veri3 = 50;

//     console.log(veri1,veri2,veri3);
// }

// console.log(veri1,veri2,veri3);
// fonksiyon();
// //çıktı: 
// //5 10 15  
// //30 40 50 

// //block scope:
// if(true){
//     var a = 10;
//     let b = 20;
//     const c = 30;
// }

// console.log(a);
// console.log(b);
// console.log(c);
// //çıktı:
// //10
// // script.js:124 Uncaught ReferenceError: b is not defined at script.js:124:13
// //yani var ile değişken tutulursa block dışında kullanılsa bile tutulur. 


const text = document.getElementById("textbox");
const btn = document.getElementById("textbtn");


text.addEventListener("copy", run);
text.addEventListener("focus",run);


function run(a){
    console.log(a.type);
}

