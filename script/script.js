var options = {
  series: [{
  name: 'Servings',
  // data: [2,3,4,6,7,8,4,2,6,4,3],
  // data: [1,7,8,6,4,3,5,3,6,3,6],
  data: [3,2,4,5,6,7,3,3,5,6,7]
},{

name: 'Servings',
data: [2,3,4,6,7,8,4,2,6,4,3],

},
{

 name: 'Servings',
   data: [1,7,8,6,4,3,5,3,6,3,6],

  }


],

chart: {
  height: 350,
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
  row: {
    colors: ['#fff', '#f2f2f2']
  }
},
xaxis: {

  categories: ['Apples', 'Oranges', 'Strawberries', 'Pineapples', 'Mangoes', 'Bananas',
    'Blackberries', 'Pears', 'Watermelons', 'Cherries', 'Pomegranates', 'Tangerines', 'Papayas'
  ],
  tickPlacement: 'on'
},


};

var chart = new ApexCharts(document.querySelector("#chart"), options);
chart.render();

