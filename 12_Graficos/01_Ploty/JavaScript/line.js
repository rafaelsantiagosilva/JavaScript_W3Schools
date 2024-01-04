const X_ARRAY_LINE = [50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150];
const Y_ARRAY_LINE = [7, 8, 8, 9, 9, 9, 10, 11, 14, 14, 15];

// Definindo dados
const DATA_LINE = [
     {
          x: X_ARRAY_LINE,
          y: Y_ARRAY_LINE,
          mode: "lines",
          type: "scatter"
     }
];

// Definindo layout
const LAYOUT_LINE = {
     // -> Rodapé
     xaxis: { range: [40, 160], title: "Metros Quadrados" },

     // -> Lateral
     yaxis: { range: [5, 16], title: "Preço em Milhões" },

     // -> Cabeçalho
     title: "Preço das Casas vs. Tamanho"
}

// Mostrando na tela
Plotly.newPlot("line", DATA_LINE, LAYOUT_LINE);