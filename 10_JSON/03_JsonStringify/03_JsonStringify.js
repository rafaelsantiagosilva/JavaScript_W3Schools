const OBJ = { name: "John", age: 30, city: "New York" };
const JSON_STRING = JSON.stringify(OBJ);
console.log(JSON_STRING);

/*
     Funciona somente quando os itens do objeto são, TODOS,
     pertencentes a um tipo que se tem também em arquivos JSON:
     
      -> Números
      -> String
      -> Booleans
      -> Arrays
      -> Objetos
      -> null

     Portanto, funções e tipos pertencentes a uma classe, como Datas
     não funcionam em stringify
*/