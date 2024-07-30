//! Iterator and Function generator
//? In Javascript an iterator is an object which defines a sequence and potentially return value upon its termination.
//* Value,done

// function listData(values){
//     let nextIndex=0;
//     return{
//         next:function(){
//             if(nextIndex<values.length){
//                 return{
//                     value:values[nextIndex++],
//                     done:false
//                 }
//               }  else{
//                 return{
//                     done:true
//                 }
//             }
//         }
//     }
// }

// let arr = [12,36,13,76,65,99]
// const list = listData(arr)

// console.log(list.next())
// console.log(list.next())
// console.log(list.next())
// console.log(list.next())
// console.log(list.next())
// console.log(list.next())
// console.log(list.next())
// console.log(list.next())

// =============================================================
// Another Example

// function iterator(values) {
//   let nextIndex = 0;
//   // we will return an Object
//   return {
//     next: function () {
//       if (nextIndex < values.length) {
//         // We will return this
//         return {
//           value: values[nextIndex++],
//           done: false,
//         };
//       } else {
//         // we will return below oject with done
//         return {
//           done: true,
//         };
//       }
//     },
//   };
// }

// const myArray = ["Apple", "Banana", "Pineapple", "Orange"];
// const fruits = iterator(myArray);
// console.log(fruits.next())
// console.log(fruits.next().value)
// console.log(fruits.next().value)
// console.log(fruits.next().value)
// console.log(fruits.next().value)
// console.log(fruits.next().value)