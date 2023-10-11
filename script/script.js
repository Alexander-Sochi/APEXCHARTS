var options = {
  series: [{

    name: 'Servings',
    data: [1, 5, 5, 4, 3,4, 6, 3, 4, 6]
  }, {
    name: 'Servings',

    data: [4, 6, 3, 4, 6,1, 5, 5, 4, 3,]
  }],
  chart: {
    width: "100%",
    type: 'bar',
    height: 350,
  },
 
  plotOptions: {
    bar: {
      horizontal: true,
    },
   
  },
  stroke: {
    colors: ['transparent'],
    width: 3,

  },
 
  responsive: [{
    breakpoint: 480,
    options: {
      legend: {
        position: 'bottom',
        offsetX: -10,
        offsetY: 0
      }
    }
  }],
  xaxis: {
    categories: ["Проживание", "F & B", "SPA & Фитнес", "Парковка", "Прочие","Проживание", "F & B", "SPA & Фитнес", "Парковка", "Прочие",],
  
    labels: {
      formatter: function (value) {
        console.log(value)
        return value.toFixed(2);
      },
  
    }
  },
  grid: {
    show: true,
    borderColor: '#90A4AE',
    strokeDashArray: 3,
    position: 'back',
  
    xaxis: {
      lines: {
        show: true
      }
    },
    yaxis: {
      lines: {
        show: true
      }
    },

  },
  dataLabels: {
    enabled: false,
    
  },

  colors: ['#fb4143', '#f9c654'],

  legend: {
    show: true,
    position: 'bottom',
    horizontalAlign: 'left', 
  },
  yaxis: {
    reversed: true,
  },

        
}


var chart = new ApexCharts(document.querySelector("#chart"), options);
chart.render();

