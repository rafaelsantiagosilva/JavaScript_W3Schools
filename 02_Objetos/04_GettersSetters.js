const pessoa = {
	nome: "Rafael",
	idade: 15,
	nacionalidade: "Brasileiro",

	// Getters
	getNome: function () {
		return this.nome;
	},

	getIdade: function () {
		return this.idade;
	},

	getNacionalidade: function () {
		return this.nacionalidade;
	},

	// Setters
	setNome: function (nome) {
		this.nome = nome;
	},

	setIdade: function (idade) {
		this.idade = idade;
	},

	setNacionalidade: function (nacionalidade) {
		this.nacionalidade = nacionalidade;
	},
};
