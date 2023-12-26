const person = {
	// A seguir são as propriedades
	firstName: "John",
	lastName: "Doe",
	age: 50,
	weight: 81.76,
	married: true,
};

// Imprimindo uma propriedade
console.log("Olá " + person.firstName + "\n"); // "Olá John"

// Usando o for pra imprimir todas as propriedades (valores)
for (let i in person) {
	console.log(person[i]);
}

// Adicionando novas propriedades
person.nacionality = "English";

// Deletando propriedades
delete person.nacionality;

// Objetos dentro de objetos
const person2 = {
	firstName: "Mary",
	lastName: "Doe",
	age: 43,
	weight: 65.3,
	married: true,
	car: {
		tagName: "Ford",
		numberOfDoors: 4,
		gasPercent: 45.9,
	},
};

console.log(
	`\n${person2.firstName} tem um ${person2.car.tagName} com ${person2.car.numberOfDoors} portas!`
);
