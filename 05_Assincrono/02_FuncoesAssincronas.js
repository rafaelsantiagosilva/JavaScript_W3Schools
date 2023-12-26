// setTimeout -> Determina que aquela função vai ocorrer após um tempo
function helloWorld() {
	console.log("Hello World!");
}

setTimeout(helloWorld, 5000); // Após 5000 milissegundos/5 segundos

// setInterval -> um intervalo para aquela função ocorrer. Ela sempre irá ocorrer
function counting() {
	console.log("3s");
}

setInterval(counting, 3000); // A cada 3 segundos ela vai ocorrer
