// let text = '{"employees":[' +
// '{"firstName":"John","lastName":"Doe" },' +
// '{"firstName":"Anna","lastName":"Smith" },' +
// '{"firstName":"Peter","lastName":"Jones" }]}';

// const obj= JSON.parse(text);
// let result= obj.employees[0].firstName+' '+ obj.employees[0].lastName;
// document.getElementById('id1').innerHTML = result;

// ===========================================================================================


// {
//     "name":"Manik",
//     "score":79.75,
//     "isAdmin":false,
//     "license":null,
//     "shopItem":["food","clothes","sunflower oil"],
//     "myObj":{
//         "name":"nested",
//         "marks":45,
//         "shopItem2":["food","clothes",{"a":true}]
//     }
// }

//! Json Array
// const jsonArray = [
//     { "name": "John", "age": 30, "city": "New York" },
//     { "name": "Jane", "age": 25, "city": "Chicago" },
//     { "name": "Mike", "age": 35, "city": "Los Angeles" }
//   ];
  
//   // Using a for loop
//   for (let i = 0; i <= jsonArray.length; i++) {
//     console.log(jsonArray[i]);
//   }
  
//   // Using forEach
//   jsonArray.forEach(item => {
//     console.log(item);
//   });


// ==========================================================================================
// //! Simple JSON Objects
// const jsonObject = {
//     "name": "John",
//     "age": 30,
//     "city": "New York"
//   };
  
//   // Using a for...in loop
//   for (let key in jsonObject) {
//     if (jsonObject.hasOwnProperty(key)) {
//       console.log(key + ": " + jsonObject[key]);
//     }
//   }