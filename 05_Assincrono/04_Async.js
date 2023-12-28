function myDisplayer(some) {
     console.log(some);
}

async function myFunction() { // Define que a função pode ser executada em segundo plano
     return "Hello";
}

myFunction().then(
     function (value) { myDisplayer(value); },
     function (error) { myDisplayer(error); }
);