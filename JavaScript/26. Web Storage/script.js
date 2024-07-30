localStorage.setItem("FirstName","Manik")
localStorage.setItem("Location","Raipur")

const get = localStorage.getItem('Location')
const get2 = localStorage.getItem('FirstName')
console.log(get)
console.log(get2)


localStorage.removeItem('FirstName');