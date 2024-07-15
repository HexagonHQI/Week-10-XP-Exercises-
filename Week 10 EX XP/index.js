//Ex1:


////In the example, the promise should reject
//compareToTen(15)
  //.then(result => console.log(result))
  //.catch(error => console.log(error))

//In the example, the promise should resolve
//compareToTen(8)
 // .then(result => console.log(result))
  //.catch(error => console.log(error))//


  function compareToTen(num) {
    return new Promise((resolve, reject) => {
      if (num <= 10) {
        resolve(`The number ${num} is less than or equal to 10`);
      } else {
        reject(`The number ${num} is greater than 10`);
      }
    });
  }
  
  // Testing the function to see if it works
  compareToTen(15)
    .then(result => console.log(result))
    .catch(error => console.log(error));
  
  compareToTen(8)
    .then(result => console.log(result))
    .catch(error => console.log(error));



    //EX2:

   // Exercise 2 : Promises
    //Instructions
    //Create a promise that resolves itself in 4 seconds and returns a “success” string.

    let promise = new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve("success");
        }, 1000);
      });
      
      promise.then((result) => {
        console.log(result);
      });


      //Ex3


      // Create a promise that resolves itself with a value of 3
let resolvedPromise = Promise.resolve(3);

resolvedPromise.then((result) => {
  console.log(result); // Output: 3
});

// Create a promise that rejects itself with the string "Boo!"
let rejectedPromise = Promise.reject("Boo!");

rejectedPromise.catch((error) => {
  console.log(error); // Output: Boo!
});






