let xValues = ["Itália", "França", "Espanha", "EUA", "Argentina"];
let yValues = [55, 49, 44, 24, 15];
let barColors = ["#FF0000", "rgb(0, 255, 0)", "rgba(0, 0, 255, 0.6)", "orange", "brown"];

new Chart("vertical-bars", {
     type: "bar",

     data: {
          labels: xValues,

          datasets: [{
               backgroundColor: barColors,
               data: yValues
          }]
     },

     options: {
          legend: { display: false },

          title: {
               display: true,
               text: "Produção Mundial de Vinho 2018"
          },

          scales: {
               yAxes: [{
                    ticks: {
                         beginAtZero: true
                    }
               }],
          }
     }
});