// JavaScript HTML DOM Events
document.getElementById("idChangeColor").style.color = "green"
document.getElementById("idChangeColor").style.fontSize = "30px"

function changeText(id){    
    id.innerHTML = "OOPs...!   Using Events changing text"
}

function upperCase(id){
   const x = document.getElementById("fName")
   x.value = x.value.toUpperCase();
}

function mOver(obj){
    obj.style.background = 'yellow'
}
function mOut(obj){
    obj.style.background = 'red'
}


function mDown(obj){
    obj.style.background = 'cyan'
    obj.innerHTML = "Release me"
}
function mUp(obj){
    obj.style.background = 'green'
    obj.innerHTML = "Click me"
}

// The addEventListener() method
document.getElementById("btn1").addEventListener("dblclick",displayDate)

function displayDate(){
    document.getElementById("dateTime").innerHTML= Date();
}

// ==========================
document.querySelector("#inner").addEventListener("click",function(){
    alert("Inner Div")
},true)

document.querySelector("#outer").addEventListener("click",function(){
    alert   ("Outer Div")
},true)


// ==============================

let manyEvent = document.getElementById("manyEventsOnBtn");
manyEvent.addEventListener("mouseover",myFunction1);
manyEvent.addEventListener("dblclick",myFunction2);
manyEvent.addEventListener("mouseout",myFunction3);

function myFunction1(){
    document.getElementById('manyEvents').innerHTML += 'Mouse Over!<br>';
}

function myFunction2(){
    document.getElementById('manyEvents').innerHTML += 'Click!<br>'
}

function myFunction3(){
    document.getElementById("manyEvents").innerHTML += 'Mouse Out <br>'
}