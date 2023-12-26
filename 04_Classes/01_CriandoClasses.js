// Criando uma classe para carro
class Carro {
	constructor(nome, ano) {
		this.nome = nome;
		this.ano = ano;
	}

	idade() {
		const date = new Date();
		return date.getFullYear() - this.ano;
	}
}

const meuCarro = new Carro("Ford", 2014);
console.log(`Meu carro é ${meuCarro.nome} e tem ${meuCarro.idade()} anos!`);
