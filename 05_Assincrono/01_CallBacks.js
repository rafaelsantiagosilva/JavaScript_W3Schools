// Callback é uma função ser passada com argumento para outra função

function imprimir(algo) {
	console.log(algo);
}

function enfeitar(algo) {
	algo = "~~~~~~~~" + String(algo) + "~~~~~~~~";
	return algo;
}

function calculadora(numero1, numero2, callback, callback2) {
	let soma = numero1 + numero2;
	soma = callback(soma);
	callback2(soma);
}

calculadora(2, 2, enfeitar, imprimir);
