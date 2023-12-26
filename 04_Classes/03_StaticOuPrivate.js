class Carro {
	constructor(nome) {
		this.nome = nome;
	}

	static hello(x) {
		return "hello " + x.nome;
	} // Somente a classe pode utilizar este método, os objetos não
}

const meuCarro = new Carro("Ford");
// console.log(meuCarro.hello(this)); Vai dar erro
console.log(Carro.hello(meuCarro)); // Funcionará
