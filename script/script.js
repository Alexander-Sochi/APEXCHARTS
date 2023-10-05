var options = {
  series: [{
    name: 'PRODUCT A',
    data: [1, 5, 5, 4, 3]
  }, {
    name: 'PRODUCT B',

    data: [4, 6, 3, 4, 6]
  }],
  chart: {
    type: 'bar',
    height: 250,
    stacked: false,
  },
  plotOptions: {
    bar: {
      horizontal: true
    }
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
    categories: ["Проживание", "F & B", "SPA & Фитнес", "Парковка", "Прочие"],
  },
  grid: {
    show: true,
    borderColor: '#90A4AE',
    strokeDashArray: 4,
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

  yaxis: {
    show: true,
    min: 0,
    max: 10,
    decimalsInFloat: undefined,
  },

  colors: ['#fb4143', '#f9c654'],

  legend: {
    show: false,
  },
};


var chart = new ApexCharts(document.querySelector("#chart"), options);
chart.render();