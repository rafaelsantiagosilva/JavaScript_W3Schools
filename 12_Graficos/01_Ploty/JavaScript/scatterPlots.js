const X_ARRAY_SCATTER = [50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150];
const Y_ARRAY_SCATTER = [7, 8, 8, 9, 9, 9, 10, 11, 14, 14, 15];

// Definindo os dados
const DATA_SCATTER = [
     {
          x: X_ARRAY_SCATTER,
          y: Y_ARRAY_SCATTER,
          mode: "markers",
          type: "scatter"
     }
];

// Definindo o layout
const LAYOUT_SCATTER = {
     // -> Rodapé
     xaxis: {range: [40, 160], title:"Metros Quadrados"},

     // -> Lateral
     yaxis: {range: [5, 16], title: "Preço em Milhões"},

     // -> Cabeçalho
     title: "Preço das Casas vs. Tamanho"
}

Plotly.newPlot("scatter-plot", DATA_SCATTER, LAYOUT_SCATTER);