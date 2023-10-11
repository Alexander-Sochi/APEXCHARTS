var options = {
  "series": [
    {
        name: "Bar",
        data: [
            {
                x: "Jan",
                y: 3.75
            },
            {
                x: "Feb",
                y: 3
            },
            {
                x: "Mar",
                y: 6.3
            },
            {
                x: "Apr",
                y: 1.3
            },
            {
                x: "Mai",
                y: 3.4
            },
            {
                x: "jun",
                y: 3
            },
            {
                x: "Aug",
                y: 2.3
            },
            {
                x: "Sep",
                y: 3.3
            },
            {
                x: "Oct",
                y: 1.3
            },
            {
                x: "Nov",
                y: 2
            },
            {
                x: "Dec",
                y: 0
            }
        ]
    },
    {
        "name": "series-2",
        "data": [
            {
                "x": "Jan",
                "y": "3"
            },
            {
                "x": "Feb",
                "y": "5"
            },
            {
                "x": "Mar",
                "y": "2.3"
            },
            {
                "x": "Apr",
                "y": "4.4"
            },
            {
                "x": "Mai",
                "y": "1.7"
            },
            {
                "x": "jun",
                "y": "4.4"
            },
            {
                "x": "Aug",
                "y": "4.5"
            },
            {
                "x": "Sep",
                "y": "1.3"
            },
            {
                "x": "Oct",
                "y": "4.4"
            },
            {
                "x": "Nov",
                "y": "0"
            },
            {
                "x": "Dec",
                "y": "0"
            }
        ]
    },
    {
        "name": "series-3",
        "data": [
            {
                "x": "Jan",
                "y": "1.6"
            },
            {
                "x": "Feb",
                "y": "4"
            },
            {
                "x": "Mar",
                "y": "4.3"
            },
            {
                "x": "Apr",
                "y": "1.9"
            },
            {
                "x": "Mai",
                "y": "8"
            },
            {
                "x": "jun",
                "y": "4.5"
            },
            {
                "x": "Aug",
                "y": "8.4"
            },
            {
                "x": "Sep",
                "y": "3.4"
            },
            {
                "x": "Oct",
                "y": "3.4"
            },
            {
                "x": "Nov",
                "y": "0"
            },
            {
                "x": "Dec",
                "y": "0"
            }
        ]
    },
    {
        "name": "series-4",
        "data": [
            {
                "x": "Jan",
                "y": null
            },
            {
                "x": "Feb",
                "y": "3"
            },
            {
                "x": "Mar",
                "y": "0"
            },
            {
                "x": "Apr",
                "y": "5.4"
            },
            {
                "x": "Mai",
                "y": "3"
            },
            {
                "x": "jun",
                "y": "6.3"
            },
            {
                "x": "Aug",
                "y": "8.6"
            },
            {
                "x": "Sep",
                "y": "7.5"
            },
            {
                "x": "Oct",
                "y": "0"
            },
            {
                "x": "Nov",
                "y": "0"
            },
            {
                "x": "Dec",
                "y": "0"
            }
        ]
    }
],
colors:['#2f9bd0'],
chart: {
  height: 250,
  type: 'bar',
},
plotOptions: {
  bar: {
    columnWidth: '50%',
  }
},
dataLabels: {
  enabled: false
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
    },
 
  },

 
},
legend:{
  show:false
},


};

var chart = new ApexCharts(document.querySelector("#chart"), options);
chart.render();

