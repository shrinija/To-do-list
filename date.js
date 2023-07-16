// console.log(module)

// module.exports="hello world"

//objects have properties and methods associated with it




module.exports.mygetDate = mygetDate; // don't and ()  , thinkk why.. keep this consepts in mind


function mygetDate() {
  const today = new Date();

  const options = {
    weekday: "long",
    year: "numeric",
    day:"numeric",
    month: "long",
  };
return today.toLocaleDateString("hi-IN", options);

}




exports.mygetDay =function () {

  const today = new Date();

  const options = {
    weekday: "long",
 
  };
return today.toLocaleDateString("hi-IN", options);

}






// console.log(module.exports);





//.................................................................................................



// // console.log(module)

// // module.exports="hello world"

// //objects have properties and methods associated with it




// module.exports.mygetDate = mygetDate; // don't and ()  , thinkk why.. keep this consepts in mind

// module.exports.mygetDay=mygetDay;




// function mygetDate() {
//   let today = new Date();

//   let options = {
//     weekday: "long",
//     year: "numeric",
//     day:"numeric",
//     month: "long",
//   };

//   let day = today.toLocaleDateString("hi-IN", options);

//   return day;
// }


// function mygetDay() {
//   let today = new Date();

//   let options = {
//     weekday: "long",
 
//   };

//   let day = today.toLocaleDateString("hi-IN", options);

//   return day;
// }


// // console.log(module.exports);