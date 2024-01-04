"use strict"; // Variáveis daqui só valem pra este arquivo

// Valores, fica na parte de baixo do gráfico
const X_ARRAY_HORIZONTAL_BAR = [55, 49, 44, 24, 15];

// Nomes dos países, fica na lateral do gráfico
const Y_ARRAY_HORIZONTAL_BAR = ["Itália", "França", "Espanha", "EUA", "Argentina"];

const DATA_HORIZONTAL_BAR = [
     {
          x: X_ARRAY_HORIZONTAL_BAR,
          y: Y_ARRAY_HORIZONTAL_BAR,
          type: "bar",
          orientation: "h",
          marker: { color: "rgba(255, 0, 0, 0.6)" }
     }
];

const LAYOUT_HORIZONTAL_BAR = {
     title: "Produção Mundial de Vinho"
};

Plotly.newPlot("horizontal-bars", DATA_HORIZONTAL_BAR, LAYOUT_HORIZONTAL_BAR);