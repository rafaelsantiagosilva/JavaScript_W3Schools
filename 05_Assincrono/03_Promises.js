"use strict";

function myDisplayer(some) {
     console.log(some);
}

let myPromise = new Promise((myResolve, myReject) => {
     let x = 0;

     if (x === 0) {
          myResolve("Ok");
     } else {
          myReject("Error");
     }
});

myPromise.then(
     (value) => {
          myDisplayer(value);
     },

     (error) => {
          myDisplayer(error);
     }
);

// ~~~~~~~~~~~~~Esperando um TimeOut~~~~~~~~~~~~~~~~~~ //

let myNewPromise = new Promise((myResolve, myReject) => {
     setTimeout(() => { myResolve("I love you!"); }, 3000);
});

myNewPromise.then((value) => {
     console.log(value);
});

// ~~~~~~~~~~~~~Esperando um Arquivo~~ (não funciona) ~~~~~~~~~~~~~~~~ //
function myDisplayerHTML(some) {
     document.getElementById('demo').innerHTML(some);
}

let myFilePromise = new Promise((myResolve, myReject) => {
     let req = new XMLHttpRequest();
     req.open('GET', '03_1_Promises.html');
     req.onload = () => {
          if (req.status == 200) {
               myResolve(req.response);
          } else {
               myReject("File not found");
          }
     };
});

myFilePromise.then(
     (value) => {
          myDisplayerHTML(value);
     },

     (error) => {
          myDisplayerHTML(error);
     }
);