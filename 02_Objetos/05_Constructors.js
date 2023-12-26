// Criando uma classe
class Pessoa {
	// Constructor
	constructor(nome, sobrenome, idade, corDosOlhos) {
		this.nome = nome;
		this.sobrenome = sobrenome;
		this.idade = idade;
		this.corDosOlhos = corDosOlhos;
	}

	// Getters
	get nome() {
		return this.nome;
	}

	get sobrenome() {
		return this.sobrenome;
	}

	get idade() {
		return this.idade;
	}

	get corDosOlhos() {
		return this.corDosOlhos;
	}
	// Setters
	set nome(nome) {
		this.nome = nome;
	}
}

// Criando um objeto com aquelas propriedades e métodos
const usuario = new Pessoa("Rafael", "Santiago", 15, "Castanhos");
