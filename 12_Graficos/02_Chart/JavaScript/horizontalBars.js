xValues = [55, 49, 44, 24, 15];
yValues = ["Itália", "França", "Espanha", "EUA", "Argentina"];
barColors = "rgba(0, 100, 255, 0.6)";

new Chart("horizontal-bars", {
     type: "horizontalBar",

     data: {
          labels: yValues,

          datasets: [{
               backgroundColor: barColors,
               data: xValues
          }]
     },

     options: {
          legend: { display: false },

          title: {
               display: true,
               text: "Produção Mundial de Vinho 2018"
          },

          scales: {
               xAxes: [{
                    ticks: {
                         beginAtZero: true
                    }
               }]
          }
     }
})