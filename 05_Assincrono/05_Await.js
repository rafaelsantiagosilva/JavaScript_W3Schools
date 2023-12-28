async function myDisplay() {
     let myPromise = new Promise(function (resolve, reject) {
          resolve("I love You !!");
     });
     console.log(await myPromise); // Espere a função ser executada para fazer o resto
     console.log('Success!');
}

myDisplay();