class Pessoa {
	constructor(nome, idade) {
		this.nome = nome;
		this.idade = idade;
	}

	fazerAniversario() {
		this.idade++;
	}

	apresentarSe() {
		console.log(`Sou ${this.nome} e tenho ${this.idade} anos!`);
	}
}

class Aluno extends Pessoa {
	constructor(nome, idade) {
		super(nome, idade); // Se referindo ao constructor da classe mãe, a superclasse
		this.intelecto = 20;
	}

	estudar() {
		this.intelecto += 5;
	}
}

const aluno = new Aluno("Rafael", 15);
aluno.apresentarSe();
