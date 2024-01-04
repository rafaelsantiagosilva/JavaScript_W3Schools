// Nomes dos países, ficam na legenda
const X_ARRAY_PIZZA = ["Itália", "França", "Espanha", "EUA", "Argentina"];

// Valores, são convertidos em porcentagem para o gráfico
const Y_ARRAY_PIZZA = [55, 49, 44, 24, 15];

// Dados
const DATA_PIZZA = [
     {
          labels: X_ARRAY_PIZZA,
          values: Y_ARRAY_PIZZA,
          type: "pie",
     }
];

// Layout
const LAYOUT_PIZZA = {
     title: "Produção Mundial de Vinho"
};

Plotly.newPlot("pizza", DATA_PIZZA, LAYOUT_PIZZA);