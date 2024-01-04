// Nomes dos países, ficam na legenda
const X_ARRAY_DONUT = ["Itália", "França", "Espanha", "EUA", "Argentina"];

// Valores, são convertidos em porcentagem para o gráfico
const Y_ARRAY_DONUT = [55, 49, 44, 24, 15];

// Dados
const DATA_DONUT = [
     {
          labels: X_ARRAY_DONUT,
          values: Y_ARRAY_DONUT,
          hole: 0.45,
          type: "pie"
     }
];

// Layout
const LAYOUT_DONUT = {
     title: "Produção Mundial de Vinho"
};

Plotly.newPlot("donut", DATA_DONUT, LAYOUT_DONUT);