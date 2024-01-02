// Exemplo 1: Convertendo JSON em um objeto Js
const TEXT_JSON =
     '{"name": "John","age": 46,"married": false,' +
     '"weight": 56.7, "children": ["William", "Junior", "Mary"],' +
     '"home": { "color": "Blue", "rooms": 5 }, "wife": null}';

const OBJ_JSON = JSON.parse(TEXT_JSON);
console.log(OBJ_JSON);
console.log(`${OBJ_JSON.name} tem ${OBJ_JSON.age} anos!`);

// Exemplo 2: Convertendo uma data de um JSON
const DATE_JSON = '{"name":"John", "birthDate":"1986-12-14", "city":"New York"}';

const OBJ_DATE_JSON = JSON.parse(DATE_JSON);
OBJ_DATE_JSON.birthDate = new Date(OBJ_DATE_JSON.birthDate);

console.log(OBJ_DATE_JSON);

