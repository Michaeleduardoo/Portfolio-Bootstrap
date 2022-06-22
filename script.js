//HTML
let bthtml = window.document.getElementById("bt-a-html")
let Bhtml = window.document.getElementById("button-html")
//HTML

//CSS
let btc = window.document.getElementById("bt-a-css")
let bcs= window.document.getElementById("button-css")
//CSS

//JAVASCRIPT
let btjs =window.document.getElementById("bt-a-js")
let jsbt =window.document.getElementById("buton-js")
//JAVASCRIPT

//Bootstrap
let btboost = window.document.getElementById("bt-a-bootstr")
let bttext = window.document.getElementById("bootsstra")
//Bootstrap

//GIT
let btgit = window.document.getElementById("bt-a-git")
let botgit = window.document.getElementById("gitbt")
//GIT

//GITHUB
let btgithub = window.document.getElementById("bt-a-gthub")
let botgithub = window.document.getElementById("github")
//GiTHUB

function hubgit(){
 
  botgithub.style.background = "none"

}
function githu(){
  
  botgithub.style.background = "#DCDCDC"
  
}

//git

function gitt(){
 
  botgit.style.background = "none"
}
function gits(){
 
  botgit.style.background = "#DCDCDC"
 }
 //git



//bootstrap

function botapaga(){
    bttext.style.background = "none"
}

function bot(){

  bttext.style.background = "#DCDCDC"

}
//bootstrap


//JS
function script(){
  jsbt.style.background = "none"
  

}

function jsb(){
  jsbt.style.background = "#DCDCDC"
}

//JS

//CSS
function butcss(){
  bcs.style.background = "none"
}

function cssbt(){
  bcs.style.background = "#DCDCDC"
}
//CSS

//HTML
function butao(){
    Bhtml.style.background = "none"
}

function butaohtml(){
  Bhtml.style.background = "#DCDCDC" 
    
}
//HTML

//GITHUB
btgithub.addEventListener("click", githu)
botgithub.addEventListener("click",hubgit )

//git
btgit.addEventListener("click", gits )
botgit.addEventListener("click", gitt)
//git

//bootstrap

btboost.addEventListener("click" , bot)
bttext.addEventListener("click" , botapaga )
//bootstrap

//JS
btjs.addEventListener("click" , jsb)
jsbt.addEventListener("click" , script)
//JS


//CSS
bcs.addEventListener("click" , butcss)
btc.addEventListener("click" , cssbt)
//CSS

//HTML
Bhtml.addEventListener("click" , butao)
bthtml.addEventListener("click" , butaohtml)
//HTML
