const data = [{
  title: "Поступление",
  value: 9999999,
  hederTextTop: 'Факт',//данные для верхнего ключа 
  hederTextBottom: 'план',//данные для нижнего ключа  

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
    "background": "#babbbd",
    "paddingLeft": "15px",
    "display":"flex",
    "alignItems": "center",
    "fontSize": "25px"
    
  }).appendTo(element);//Создаем header 


  let containerTop = $('<div>').css({
    "display": "flex",
    "flexDirection": "row",
    "justifyContent": "space-evenly",
    "margin": "30px 1px 30px 0px",
  }).appendTo(element); // контейнер див для верхнего ключ значения поля

  let txtKeyTop = $('<div>').css({

    "display":"flex",
    "alignItems": "center"

  }).appendTo(containerTop);//Ключ для верхнего поля

  let textMeaningTop = $('<div>').css({
      "fontSize":'30px'
  }).appendTo(containerTop);//Значение для верхнего поля

  let containerBottom = $('<div>').css({
    "display": "flex",
    "flexDirection": "row",
    "justifyContent": "space-evenly",

  }).appendTo(element);//Контейнер див для  нижнего ключ значение 

  let txtKeyBootom = $('<div>').css({
    "display":"flex",
    "alignItems": "center"
    
  }).appendTo(containerBottom);//Ключ для нижнего поля 

  let  textMeaningBootom = $('<div>').css({
    "fontSize":'30px'
  }).appendTo(containerBottom);// Значение для нижнего поля


  $('<span>').text(data[0].title).appendTo(wrapper);

  $('<span>').text(data[0].value).appendTo(textMeaningTop);
  $('<span>').text(data[0].hederTextTop).appendTo(txtKeyTop);

  $('<span>').text(data[0].value).appendTo(textMeaningBootom);
  $('<span>').text(data[0].hederTextBottom).appendTo(txtKeyBootom);

}
chart()


