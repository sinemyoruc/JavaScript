"use strict"
/*class Apartman{
    constructor(beton,tugla,cam){
        this.beton = beton;
        this.tugla = tugla;
        this.cam = cam;
    }
    betonCins(){
        console.log(this.beton);
    }
    tuglaCins(){
        console.log(this.tugla);
    }
    camCins(){
        console.log(this.cam);
    }
}

var apartman = new Apartman("Cimento","Pirket","Kirilmmaz");
apartman.betonCins();
apartman.tuglaCins();
apartman.camCins();
*/




/*
class DortIslem{
    constructor(sayi1,sayi2){
        this.sayi1 = sayi1;
        this.sayi2 = sayi2;
    }
    toplama(){
        return this.sayi1 + this.sayi2;
    }
    cikarma(){
        return this.sayi1 - this.sayi2;
    }
    carpma(){
        return this.sayi1 * this.sayi2;
    }
    bolme(){
        return this.sayi1 / this.sayi2;
    }
}

var islem1 = new DortIslem(10,5);
console.log("Toplama: " + islem1.toplama());
console.log("Cikarma: " + islem1.cikarma());
console.log("Carpma: " + islem1.carpma());
console.log("Bolme: " + islem1.bolme());
*/






/*
//ZINCIRLEME
class DortIslem{
    constructor(sayi1,sayi2){
        this.sayi1 = sayi1;
        this.sayi2 = sayi2;
    }
    context(){
        return this;
    }
    toplama(){
        this.toplam =  this.sayi1 + this.sayi2;
        return this;
    }
    besleCarp(){
        console.log("Sonuc: " + this.toplam * 5);
    }
}
var islem1 = new DortIslem(10,5);
islem1.toplama().besleCarp();
*/






/*
class DortIslem{
    constructor(sayi1,sayi2){
        this.sayi1 = sayi1;
        this.sayi2 = sayi2;
    }
    toplama(){
        this.toplam = this.sayi1 + this.sayi2;
        return this;
    }
    besleCarp(){
        console.log("Sonuc: " + this.toplam * 5);
    }
}
class BaskaSinif extends DortIslem{
    constructor(sayi1,sayi2){
        super(sayi1,sayi2);
    }
    cikarma(){
        this.toplam = this.sayi1 - this.sayi2;
        return this;
    }
}
var baskaSinif = new BaskaSinif(10,5);
baskaSinif.toplama().besleCarp();
baskaSinif.cikarma().besleCarp();
*/