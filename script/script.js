const data = [{
  title: "Поступление",
  value: 9999999,
  hederTextBottom: 'План',
  hederTextTop: 'Факт'
}];



function chart() {
  let element = $('<div>', {
    class: 'score',
    css: ({
      width: "400px",
      height: "200px",
      margin: "95px auto",
      background: "white",
    })
  }).appendTo($('body'))

  let wrapper = $('<div>').css({
    "borderTopLeftRadius": "5px",
    "borderTopRightRadius": "5px",
    "height": "40px",
    "margin": "95px auto",
    "background": "#babbbd",
    "paddingLeft": "15px",
    "paddingTop": "5px",
    "fontSize": "25px"
  }).appendTo(element);

let textMeaningBootom = $('<div>').css({
    "fontSize": "16px",
    "display": "flex",
      "flexDirection": "row",
      "justifyContent": "space-evenly",
      "margin-top":"-60px"

  }).appendTo(element);

  let txtKeyBootom = $('<div>').css({
    "fontSize": "16px"
  }).appendTo(textMeaningBootom);

  let textMeaningTop = $('<div>').css({
  
    "fontSize": "16px",
    "display": "flex",
      "flexDirection": "row",
      "justifyContent": "space-evenly",
      "margin-top":"30px"
  
    
  }).appendTo(element); // Заглавня 

  let txtKeyTop = $('<div>').css({
    "fontSize": "16px"
  }).appendTo(textMeaningTop);



  $('<span>').text(data[0].title).appendTo(wrapper);

  $('<span>').text(data[0].value).appendTo(textMeaningTop);
  $('<span>').text(data[0].hederTextTop).appendTo(txtKeyTop);

  $('<span>').text(data[0].value).appendTo(textMeaningBootom);
  $('<span>').text(data[0].hederTextBottom).appendTo(txtKeyBootom);
  


}

chart()


