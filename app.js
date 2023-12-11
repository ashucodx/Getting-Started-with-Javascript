const bttn = document.querySelector("button");
const body = document.querySelector("body");
const color = ['red','green','pink','blue','yellow'];
body.style.backgroundColor ="green";

bttn.addEventListener('click',changebg)
function changebg(){
    const colorIndex = parseInt(Math.random()*color.length);
    body.style.backgroundColor = color[colorIndex]
}