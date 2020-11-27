var x = 10;
var y = 30;
document.write(x+y);  //Sayfaya yazdir
console.log(x+y);     //Konsola yazdir
confirm(x+y);         //Bilgi mesajina yazdir  

/*
var text1 = "Selam";
var text2 = " Sinem";
var total = text1+text2
document.write(text1+text2);
document.write(total);
*/



/*
//DEĞİŞKEN TANIMLAMALARI
var sayi = 10;   //integer
var text = "Merhaba";  //string
var bool = true;    //boolean / true or false
var array = [10,20,"Merhaba",true]; //array[0]=10
var json = {"date":"2020"}

console.log(json.date);
*/



/*
//DİZİLER
var array = [2,3,1,"selam",true,"hi"];

var newArray = array.slice(2,5); //Verilen indisler arasındaki elemanlardan yeni bir array olusturur
console.log(newArray);

var string = array.toString();  //Array icindekileri text olarak yazar
console.log(string);

array.sort();  //Küçükten büyüğe sıralar
console.log(array);

var length = array.length; //Arrayin eleman sayısı
console.log(length);
*/



/*
//IF-ELSE
var email = "sinem@gmail.com";
//var email = "admin@gmail.com";
var pass = 1234;
if(email=="sinem@gmail.com" && pass == 1234){
    console.log("Giris Basarili");
}
else if(email == "admin@gmail.com"){
    console.log("Admin olarak giris yapamazsiniz")
}
else{
    console.log("Giris Yapilamadi")
}
*/



/*
0 && 1 = 0
1 && 0 = 0
1 && 1 = 1
0 && 0 = 0

1 || 0 = 1
1 || 1 = 1
0 || 1 = 1
0 || 0 = 1
*/



/*
//SWITCH-CASE
//var email = "sinem@gmail.com";
//var email = "s@gmail.com"
//var email = "";
switch(email){
    case "sinem@gmail.com":
        console.log("E-mailiniz : sinem@gmail.com");
        break;
    case "s@gmail.com":
        console.log("E-mailiniz : s@gmail.com");
        break;
        default:
            console.log("Yanlis email");
            break;
}
*/


/*
//WHILE
var counter = 0;
while(counter < 10){
    document.write("Sinem <br>");
    counter = counter + 1;
}
*/

/*
var counter = 0;
var value = 5;
while(counter < 100){
    document.write(counter * value + "<br>");
    counter = counter + 1;
}
*/

/*
var counter = 0;
do{
    console.log(counter+") Sinem");
    counter++;
}while(counter < 10);
*/
/*
var counter = 0;
while(counter < 10){
    counter += 4
    console.log(counter+") Sinem");
}*/



/*
//FOR DONGUSU
for(var counter = 0; counter <= 100; (counter+=10)){
    console.log(counter);
}*/

/*
for(var counter = 0; counter <= 100; (counter+=10)){
    if(counter % 4 == 0){
        console.log(counter);
    }
}*/

/*
var array = ["Sinem", "Iki", "Merhaba", "Evet"];
for(element in array){
    console.log(array[element]);
}
*/
/*
var array = {"data":"key"};
for(element in array){
    console.log(array[element]);
}*/



/*
var random = Math.random(); //0 ile 1 arasinda Random sayi uretir
console.log(random);
*/



/*
//TRY-CATCH
try{
    var sinem = "sinem";
    var n1 = 1;
    while(a == true, x = "sinem"){
        console.log("afsdf");
    }
}catch(error){
    document.write(error);
}*/