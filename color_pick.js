let button1=document.getElementById("button1");
let button2=document.getElementById("button2");
let button3=document.getElementById("button3");
let button4=document.getElementById("button4");

let bg_con=document.getElementById("colorPickerContainer");
let colorChange=document.getElementById("selectedColorHexCode");
let bg_text=document.getElementById("bg_text_head");

button1.onclick=function(){
    bg_con.style.backgroundColor="#e0e0e0";
    bg_con.classList.add("bg_con");
    colorChange.textContent="#e0e0e0";
    bg_text.classList.add("bg_heading");
}

button2.onclick=function(){
    bg_con.style.backgroundColor="#6fcf97";
    bg_con.classList.add("bg_con");
    colorChange.textContent="#6fcf97";
    bg_text.classList.add("bg_heading");
}

button3.onclick=function(){
    bg_con.style.backgroundColor="#56ccf2";
    bg_con.classList.add("bg_con");
    colorChange.textContent="#56ccf2";
    bg_text.classList.add("bg_heading");
}

button4.onclick=function(){
    bg_con.style.backgroundColor="#bb6bd9";
    bg_con.classList.add("bg_con");
    colorChange.textContent="#bb6bd9";
    bg_text.classList.add("bg_heading");
}