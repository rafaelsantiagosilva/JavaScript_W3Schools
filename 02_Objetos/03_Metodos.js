const pessoa = {
	nome: "Rafael",
	sobrenome: "Santiago",

	// Declarando um método
	apresentar: function () {
		return `Eu sou ${this.nome} ${this.sobrenome}! E você?`;
	},
};

console.log(pessoa.apresentar());
