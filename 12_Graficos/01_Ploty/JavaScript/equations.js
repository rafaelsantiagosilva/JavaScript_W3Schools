let mathExpression = "Math.sin(x)";

// Gerando valores
const X_VALUES_EQUATION = [];
const Y_VALUES_EQUATION = [];

for (let x = 0; x <= 10; x += 0.1) {
     X_VALUES_EQUATION.push(x);
     Y_VALUES_EQUATION.push(eval(mathExpression)); // Executando a expressão
}

// Mostrando em um gráfico
const DATA_EQUATION = [
     {
          x: X_VALUES_EQUATION,
          y: Y_VALUES_EQUATION,
          mode: "lines"
     }
];

const LAYOUT_EQUATION = {
     title: "y = " + mathExpression
};

Plotly.newPlot("equation" ,DATA_EQUATION, LAYOUT_EQUATION);