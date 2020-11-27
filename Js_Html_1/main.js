/*var button = document.getElementsByTagName("button")[0];
button.onclick = function(){
    alert("Buttona Tiklandi");
};
button.onfocus = function(){
    console.log("Buttona Focuslandi");
};
button.ondblclick = function(){
    console.log("Butona 2 defa Tiklandi");
};
*/

//BUTTON EKLEME
var button = document.createElement("button");
button.innerText = "Button Yaratildi";
button.onclick = function(){
    alert("Button Yaratildi");
}
document.getElementById("buttonContainer").appendChild(button);

//YAZI EKLEME
var pText = document.createElement("p");
pText.innerText = "Yazi Yaratildi";
document.getElementById("pTextContainer").appendChild(pText);

//RESIM EKLEME
var img = document.createElement("img");
img.src = "https://zeka-oyunlari.s3-eu-west-1.amazonaws.com/s2292hf2fbf9a59329ae6ed70d906c7fdae55ef5ad92cf.?1525352828";
img.style.width = "100%";
img.style.height = "auto";
img.alt = "Kelebek Resmi";
img.onclick = function(){
    window.open("https://www.youtube.com/", "__blank");
}
document.getElementById("imageContainer").appendChild(img);

//ALTA EKLEME
var footer = document.createElement("footer");
footer.innerText = "Footer";
document.body.appendChild(footer);

