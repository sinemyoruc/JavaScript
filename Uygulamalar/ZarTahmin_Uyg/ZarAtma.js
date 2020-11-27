var tahmin1 = prompt("Zar tahmini 1",1);
var tahmin2 = prompt("Zar tahmini 2",1);
var tahminTamSayi1 = parseInt(tahmin1);
var tahminTamSayi2 = parseInt(tahmin2);
var totalSayi = tahminTamSayi1 + tahminTamSayi2;
console.log("Total Tahmininiz: "+totalSayi);
var random1 = Math.random();
var random2 = Math.random();
//alert(totalSayi);
if(random1 < 1){
    random1 = (random1+1) * 6;
    random1 = Math.floor(random1);
    random2 = (random2+1) * 6;
    random2 = Math.floor(random2);

    if(random1 > 6){
        random1 = random1 % 6;
    }
    else if(random2 > 6){
        random2 = random2 % 6;
    }

    var randomTotal = random1 + random2;
    console.log("Total Zar: "+randomTotal);
}

if(randomTotal == totalSayi){
    console.log("TEBRIKLER, Bildin!!");
}
else{
    console.log("Aradaki sayi farki: "+(randomTotal-totalSayi).toString());
}

document.write("Tahminim: <br>");
for(var counter1 = 0; counter1 < totalSayi; counter1++){
    document.write(" $ ");
}
document.write("<br>Random Toplam Sonucu: <br>");
var counter2 = 0;
while(counter2 < randomTotal){
    document.write(" * ");
    counter2++;
}