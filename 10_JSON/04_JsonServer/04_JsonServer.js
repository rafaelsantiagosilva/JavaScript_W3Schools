// Enviando dados
const MY_OBJ = { name: "John", age: 31, city: "new York" };
const MY_JSON_STRING = JSON.stringify(MY_OBJ);

function goPHP() {
     window.location = "04_JsonServer.php?x=" + MY_JSON_STRING;
}

// Recebendo dados
const MY_JSON_STRING_2 = '{"name":"John", "age":31, "city":"New York"}';
const MY_OBJ_2 = JSON.parse(MY_JSON_STRING_2);

for (let i in MY_OBJ_2) {
     document.getElementById('objectJS').innerHTML += i + ":" + MY_OBJ_2[i] + ", ";
}

// Através do AJAX ( Não funciona D: )
const XML_HTTP = new XMLHttpRequest();
XML_HTTP.onload = function () {
     const MY_OBJ_3 = JSON.parse(this.responseText);

     document.getElementById("objectAJAX").innerHTML = MY_OBJ_3.name;

     XML_HTTP.open("GET", "./04_JsonServer.txt");
     XML_HTTP.send();
}