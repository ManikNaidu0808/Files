const form = document.forms["frm"];
let text = "";
for(let i=0; i<=form.length-2; i++){
    text = text + form[i].value+" ";
}

document.getElementById("myform").innerHTML = text;