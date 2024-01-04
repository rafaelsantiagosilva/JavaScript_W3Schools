let mathExpression1 = "x";
let mathExpression2 = "1.5 * x";
let mathExpression3 = "1.5 * x+7"

let mathExpressions = [mathExpression1, mathExpression2, mathExpression3];

// Gerando valores
const X1_VALUES = [];
const X2_VALUES = [];
const X3_VALUES = [];
const Y1_VALUES = [];
const Y2_VALUES = [];
const Y3_VALUES = [];

const X_VALUES = [X1_VALUES, X2_VALUES, X3_VALUES];
const Y_VALUES = [Y1_VALUES, Y2_VALUES, Y3_VALUES];

for (let x = 0; x <= 10; x++) {
     for (let i = 0; i < 3; i++) {
          X_VALUES[i].push(x);
          Y_VALUES[i].push(eval(mathExpressions[i]));
     }
}

// Definindo os dados
const DATA = [];

for (let i in mathExpressions) {
     DATA.push({ x: X_VALUES[i], y: Y_VALUES[i], mode: "lines" });
}

// Definindo layouts
const LAYOUT = { title: `[y=${mathExpression1}] [y=${mathExpression2}] [y=${mathExpression3}]` };

// Construindo o gráfico
Plotly.newPlot("multiple-lines", DATA, LAYOUT);