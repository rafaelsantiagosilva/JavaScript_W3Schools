// Nomes dos países, fica na parte de baixo do gráfico
const X_ARRAY_VERTICAL_BAR = ["Itália", "França", "Espanha", "EUA", "Argentina"];

// Valores, fica na lateral do gráfico
const Y_ARRAY_VERTICAL_BAR = [55, 49, 44, 24, 15];

const DATA_VERTICAL_BAR = [
     {
          x: X_ARRAY_VERTICAL_BAR,
          y: Y_ARRAY_VERTICAL_BAR,
          type: "bar",
          orientation: "v",
          marker: { color: "rgba(0, 0, 255, 0.6)" }
     }
];

const LAYOUT_VERTICAL_BAR = {
     title: "Produção Mundial de Vinho"
};

Plotly.newPlot("vertical-bars", DATA_VERTICAL_BAR, LAYOUT_VERTICAL_BAR);