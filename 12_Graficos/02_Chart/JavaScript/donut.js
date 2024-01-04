xValues = ["Itália", "França", "Espanha", "EUA", "Argentina"];
yValues = [55, 49, 44, 24, 15];
barColors = [
     "#1e7145",
     "#b91d47",
     "#FFee55",
     "#0055FF",
     "#00FFFF"
];

new Chart("donut", {
     type: "doughnut",

     data: {
          labels: xValues,

          datasets: [{
               backgroundColor: barColors,
               data: yValues
          }]
     },

     options: {
          title: {
               display: true,
               text: "Produção Mundial de Vinho 2018"
          }
     }
});