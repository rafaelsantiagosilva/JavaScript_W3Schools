let mathExpressionMarkers = "Math.sin(x)";

// Gerando valores
const X_VALUES_EQUATION_MARKERS = [];
const Y_VALUES_EQUATION_MARKERS = [];

for (let x = 0; x <= 10; x += 0.1) {
     X_VALUES_EQUATION_MARKERS.push(x);
     Y_VALUES_EQUATION_MARKERS.push(eval(mathExpressionMarkers)); // Executando a expressão
}

// Mostrando em um gráfico
const DATA_EQUATION_MARKERS = [
     {
          x: X_VALUES_EQUATION_MARKERS,
          y: Y_VALUES_EQUATION_MARKERS,
          mode: "markers"
     }
];

const LAYOUT_EQUATION_MARKERS = {
     title: "y = " + mathExpressionMarkers
};

Plotly.newPlot("equation-markers" ,DATA_EQUATION_MARKERS, LAYOUT_EQUATION_MARKERS);