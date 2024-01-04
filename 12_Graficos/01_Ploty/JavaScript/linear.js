let mathExpressionLinear = "x + 17";

// Gerando valores
const X_VALUES_LINEAR = [];
const Y_VALUES_LINEAR = [];

for (let x = 0; x <= 10; x++) {
     Y_VALUES_LINEAR.push(eval(mathExpressionLinear));
     X_VALUES_LINEAR.push(x);
}

// Definindo os dados
const DATA_LINEAR = [
     {
          x: X_VALUES_LINEAR,
          y: Y_VALUES_LINEAR,
          mode: "lines",
     }
];

// Definindo layouts
const LAYOUT_LINEAR = { title: "y = " + mathExpressionLinear};

// Construindo o gráfico
Plotly.newPlot("linear", DATA_LINEAR, LAYOUT_LINEAR);