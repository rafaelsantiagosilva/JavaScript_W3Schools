xValues = [];
yValues = [];

function generateData(mathExpression, begin, end, step = 1) {
     for (let x = begin; x <= end; x += step) {
          xValues.push(x);
          yValues.push(eval(mathExpression));
     }
}

generateData(mathExpression = "x * 2 + 7", begin = 0, end = 10, step = 0.5);

new Chart("linear", {
     type: "line",

     data: {
          labels: xValues,

          datasets: [{
               fill: false,
               pointRadius: 1,
               borderColor: "rgba(255, 0, 0, 0.5)",
               data: yValues
          }]
     },

     options: {
          legend: { display: false },

          title: {
               display: true,
               text: "y= x * 2 + 7",
               fontSize: 16
          }
     }
})