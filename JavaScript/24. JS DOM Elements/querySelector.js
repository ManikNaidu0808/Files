let myQuerySelector = document.querySelectorAll("p.myQuerySelectorClass")
document.getElementById("myQuerySelectorId").innerHTML = 
myQuerySelector[0].innerHTML+ " " +myQuerySelector[1].innerHTML
