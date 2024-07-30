function alertMessage(){
    alert("Hello India")
}
// ============================================================
const btn = document.getElementById('btn');
btn.addEventListener('click',alertMessage);

// ================================================================
const myDiv = document.getElementById("myDiv");
function changeBackgroundColor(){
    myDiv.style.backgroundColor = "lightgreen"
}
myDiv.addEventListener('mouseover',changeBackgroundColor)
function resetBackgroundColor(){
    myDiv.style.backgroundColor = 'pink';
}
myDiv.addEventListener('mouseout',resetBackgroundColor);