var player1 = document.getElementById("player1");
var player2 = document.getElementById("player2");
class TKM{
    constructor(){
        this.sonuc = ["Tas", "Kagit", "Makas"];
    }
    hareketUret(){
        var key = Math.floor(Math.random()*3);   //0 ile 3 arasinda rastgele sayi uretir.
        var hand = this.sonuc[key];
        this.firstPick = hand;
        console.log("Player 1 "+hand+" hareketini cekti");
        return this;
    }
    hareketUret2(){
        var key = Math.floor(Math.random()*3);   //0 ile 3 arasinda rastgele sayi uretir.
        var hand = this.sonuc[key];
        this.secondPick = hand;
        console.log("Player 2 "+hand+" hareketini cekti");
        return this;
    }
    kontrolEt(){
    if(this.firstPick === this.secondPick){
        return this.yenidenOynansin();
    }
    else if(this.firstPick === "Tas" && this.secondPick === "Kagit"){
        return 2;
    }
    else if(this.firstPick === "Tas" && this.secondPick === "Makas"){
        return 1;
    }
    else if(this.firstPick === "Kagit" && this.secondPick === "Tas"){
        return 1;
    }
    else if(this.firstPick === "Kagit" && this.secondPick === "Makas"){
        return 2;
    }
    else if(this.firstPick === "Makas" && this.secondPick === "Kagit"){
        return 1;
    }
    else if(this.firstPick === "Makas" && this.secondPick === "Tas"){
        return 2;
    }
    else{
        console.log("HATA!!!");
    }
}
    yenidenOynansin(){
        console.log("Oyun Tekrar Oynaniyor...");
        var kimKazandi = this.hareketUret().hareketUret2().kontrolEt();
        return kimKazandi;
    }
}
var tkm = new TKM();
var kimKazandi;
for(var counter = 0; counter < 100; counter++){
    kimKazandi = tkm.hareketUret().hareketUret2().kontrolEt();
    if(kimKazandi === 1){
        player1.innerText += "+";
    }else if(kimKazandi === 2){
        player2.innerText += "+";
    }else{
        console.log("HATA");
    }
} 
//console.log("Player "+kimKazandi+" oyunu kazandi");