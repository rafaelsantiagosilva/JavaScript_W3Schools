// Criando um map
const fruits = new Map([ // Nitidamente um objeto -> fruits instanceof Map
     ["apples", 500],
     ["bananas", 300],
     ["oranges", 200]
]);

// Adicionando elementos
fruits.set("grapples", 100);

// Alterando valores
fruits.set("apples", 400);

// Imprimindo valores
console.log(fruits.get("apples")); // Imprime 400

// Tamanho do map
console.log(fruits.size);

// Apagando valores
fruits.delete("apples");

// Limpando o map
fruits.clear();

// Verificando se tem o valor
fruits.has("oranges"); // Retorna false

fruits.set("apples", 300);
fruits.set("bananas", 200);
fruits.set("oranges", 100);

// forEach
let text = "";
fruits.forEach((value, key) => {
     text += key + ' = ' + value + '\n';
});
console.log(text);

// entries
for(const x of fruits.entries()){
     text += x + '\n'; // key,value
}
console.log(text);

// keys
for(const x of fruits.keys()){
     text += x + '\n'; // key
}
console.log(text);

// values
for(const x of fruits.values()){
     text += x + '\n'; // key
}
console.log(text);