var options = {
  series: [{
    name: 'Факт',
    data: [1500, 5445, 5241, 6267]
  }, {
    name: 'Факт1',
    data: [4440, 5875, 5541, 6447]
  }, {
    name: 'Факт1',
    data: [5644, 3355, 4641, 5567]
  }
  ],
  chart: {
    type: 'bar',

  },
  stroke: {
    colors: ['transparent'],
    width: 15,

  },
  dataLabels: {
    enabled: false,
  },
  colors: ['#fb3f43', '#90c06c', '#2b9fdb'],
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
    padding: {
      top: 10,
      right: 100,
      bottom: 100,
      left:10
  },  
  },
  yaxis: {
    show: true,
    min: 0,
    max: 8000,
    decimalsInFloat: undefined,
    tickAmount: 8
  },
  xaxis: {
    categories: ['Отель 1', 'Отель 2', 'Отель 3', 'Отель 4'
    ],

  },

}

var chart = new ApexCharts(document.querySelector("#chart"), options);

chart.render();