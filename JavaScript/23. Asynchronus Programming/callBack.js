// //! Assume this response is coming from server
// const students = [
//   { name: "Jon", subject: "Javascript" },
//   { name: "Tom", subject: "CSS" },
// ];

// function enrollStudent(student , callBack) {
//   setTimeout(function () {
//     students.push(student);
//     console.log("Student has been enrolled");
//     callBack()
//   }, 4000);
// }

// function getStudents() {
//   setTimeout(function () {
//     let str = "";
//     students.forEach(function (student) {
//       str += `<li>${student.name}</li>`;
//     });
//     document.getElementById("students").innerHTML = str;
//     console.log("Student have been fetched");
//   }, 1000);
// }

// let newStudent = { name: "Sunny", subject: "HTML" };
// enrollStudent(newStudent , getStudents);


// ==============================================================

// function fetchData(callBack){
//   setTimeout(()=>{
//     const data = {name:'Manik' , bottle :'black'}
//     callBack(data)
//   },1000)
// }

// fetchData((data)=>{
//   console.log("Data Received",data)
// });

// ================================================

// function fetchData(callBack){
//     const name = "Manik "
//     callBack(name);
// }

// function result(name){
//    console.log(name + "Naidu")}

// fetchData(result);

// =============================================
const students = [
  { name: "Jon", subject: "Javascript" },
  { name: "Tom", subject: "CSS" },
];

function enrollStudent(student , callBack) {
  setTimeout(function () {
    students.push(student);
    console.log("Student has been enrolled");
    callBack()
  }, 4000);
}

function getStudents() {
  setTimeout(function () {
    // let str = "";
    students.forEach(function (student) {
      console.log(student.name);
    });
    // document.getElementById("students").innerHTML = str;
    console.log("Student have been fetched");
  }, 2000);
}

let newStudent = { name: "Sunny", subject: "HTML" };
enrollStudent(newStudent , getStudents);



// ================================================
// function func1(callback){
//   console.log("func1 is called");
//   let name = "Manik"
//   callback(name);
// }
// function func2(name){
//   console.log("func2 is called");
//   console.log(name +" Naidu")
// }
// func1(func2);