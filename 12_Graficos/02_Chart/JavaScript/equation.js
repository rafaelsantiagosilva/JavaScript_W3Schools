xValues = [];
yValues = [];

function generateData(mathExpression, begin, end, step = 1) {
     for (let x = begin; x <= end; x += step) {
          xValues.push(x);
          yValues.push(eval(mathExpression));
     }
}

generateData(mathExpression = "Math.sin(x)", begin = 0, end = 10, step = 0.5);

new Chart("equation", {
     type: "line",

     data: {
          labels: xValues,

          datasets: [{
               fill: false,
               pointRadius: 1,
               borderColor: "rgba(0, 0, 255, 0.5)",
               data: yValues
          }]
     },

     options: {
          legend: { display: false },

          title: {
               display: true,
               text: "y= sen(x)",
               fontSize: 16
          }
     }
})