// let p = fetch("https://goweather.herokuapp.com/weather/Ny")
// p.then((value1)=>{
//     return value1.json()
//     // console.log(response.status)
//     // console.log(response.ok)
//     // console.log(response.text())
//     // return response.json()
// }).then((value2)=>{
//     console.log(value2)
// })

// ===================================

// fetch("https://jsonplaceholder.typicode.com/posts")
// // fetch("readme.txt")
// .then((response) => {
//     return response.json()
// })
// .then((data)=>{
//     console.log(data)
//     for(var x in data){
//         console.log(data[x].title)
//     }
// })
// .catch((e)=>console.log("Can't fetch data"))

// ==========================================https://jsonplaceholder.typicode.com/posts

// }).then((value2)=>{
//     console.log(value2)
// })

// ===================================

// fetch("https://jsonplaceholder.typicode.com/posts")
// // fetch("readme.txt")
// .then((response) => {
//     return response.json()
// })
// .then((data)=>{
//     console.log(data)
//     for(var x in data){
//         console.log(data[x].title)
//     }
// })
// .catch((e)=>console.log("Can't fetch data"))

// =======================================
// var obj={
//     title:"foo",
//     body:"bar",
//     userID:1
// }
// fetch("https://jsonplaceholder.typicode.com/posts",{
//     method:"POST",
//     body: JSON.stringify(obj),
//     headers:{
//         'Content-type':'application/json; charset=UTF-8',
//     },
// })
// .then((response)=>response.json())
// .then((json)=>console.log(json));


// ===================================================

document.getElementById("saveForm").addEventListener("click",function(e){
    e.preventDefault()
    var obj={
            title: document.getElementById('titleText').value,
            body: document.getElementById('bodyText').value,
            userID: document.getElementById('userId').value
        }

        fetch("https://jsonplaceholder.typicode.com/posts",{
            method:"POST",
            body: JSON.stringify(obj),
            headers:{
                'Content-type':'application/json; charset=UTF-8'
            }
        }).then((r)=>r.json())
        .then((json)=>console.log(json));
})          