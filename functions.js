
/*
function show_number_range_slider(){
  var value = $("#first_bar").val();
  $(".ballon1::after").css("content",value);
  
}

$(document).ready(function change_water_level(){
  var level = document.getElementById("last_bar");
  print(level);
  print("helloWorld");
  $("#liquid").css("height",(level*100/170)+"%");
});*/

var first_bar=document.getElementById("first_bar");

first_bar.addEventListener("input", function(){
  var myHeading1 = document.querySelector("#text1");
  var myHeading2 = document.querySelector("#text2");
  var myHeading3 = document.querySelector("#text3");
  var value = $("#first_bar").val();
  var value3 = $("#last_bar").val();
  myHeading1.textContent = /*18-*/value;
  if((/*18-*/value)==18){
    myHeading2.textContent = 1.0;
    myHeading3.textContent = 18;
    $("#liquid").css("height", 100+"%");
    $("#liquid").css("border", 10+"px solid #0e83cd");
    $("#liquid2").css("height", 100+"%");
  }
  else if((/*18-*/value)==0){
    myHeading2.textContent = 0;
    myHeading3.textContent = 0;
    $("#liquid").css("height", 0+"%");
    $("#liquid").css("border", 0+"px");
    $("#liquid2").css("height", 0+"%");
    $("#liquid2").css("border", 0+"px");
  }
   else{
    myHeading2.textContent = (Math.round(((/*18-*/value)/18.0) * 100)/100).toFixed(2);
    myHeading3.textContent = (((/*18-*/value)*18)/18);
    $("#liquid2").css("height",(((/*18-*/value)*100/18))+"%");
    $("#liquid").css("height",(((/*18-*/value)*100/18))+"%");
    $("#liquid").css("border", ((((/*18-*/value)*10)/18))+"px solid #0e83cd");
    /*$("#liquid").css("width", (((18-value)*180)/18)+"px");*/
  }
});
  
var second_bar=document.getElementById("second_bar");

second_bar.addEventListener("input", function(){
  var myHeading1 = document.querySelector("#text1");
  var myHeading2 = document.querySelector("#text2");
  var myHeading3 = document.querySelector("#text3");
  var value = $("#second_bar").val();
  var val1 = $("#first_bar").val();
  var val3 = $("#last_bar").val();
  myHeading2.textContent = (Math.round((/*1.0-*/value) * 100)/100).toFixed(2);
  if((/*18-*/value)==18){
    myHeading1.textContent = 18;
    myHeading3.textContent = 18;
    $("#liquid").css("height", 100+"%");
    $("#liquid").css("border", 10+"px solid #0e83cd");
    $("#liquid2").css("height", 100+"%");
  }
  if((/*18-*/value)==0){
    myHeading1.textContent = 0;
    myHeading3.textContent = 0;
    $("#liquid").css("height", 0+"%");
    $("#liquid").css("border", 0+"px");
    $("#liquid2").css("height", 0+"%");
    $("#liquid2").css("border", 0+"px");
  }

  else{//erro aqui; inverter o value e multiplicar por 18
    myHeading3.textContent = (Math.round((value*18) * 100)/100).toFixed(1);
    myHeading1.textContent = (Math.round((value*18) * 100)/100).toFixed(1);
    $("#liquid2").css("height",(( (Math.round((value*18) * 100)/100).toFixed(1) *100/18))+"%");
    $("#liquid").css("height",(( (Math.round((value*18) * 100)/100).toFixed(1) *100/18))+"%");
    $("#liquid").css("border", ((((Math.round((value*18) * 100)/100).toFixed(1)*10)/18))+"px solid #0e83cd");
  }
});



var last_bar=document.getElementById("last_bar");

last_bar.addEventListener("input", function(){
  var myHeading = document.querySelector("#text3");
  var myHeading2 = document.querySelector("#text2");
  var myHeading1 = document.querySelector("#text1");
  var value = $("#last_bar").val();
  myHeading.textContent = /*18-*/value;
if((/*18-*/value)==18){ //zero
  $("#liquid").css("height", 100+"%");
  $("#liquid").css("border", 10+"px solid #0e83cd");
  //myHeading2.textContent = myHeading.textContent;
  myHeading1.textContent = myHeading.textContent;
  myHeading2.textContent = 1.0;


  $("#liquid2").css("height", 100+"%");
  //$("#liquid2").css("border", 10+"px solid #0e83cd");
}
else if(/*18-*/value==0){ //eighteen
  $("#liquid").css("height", 0+"%");
  $("#liquid").css("border", 0+"px");
  myHeading2.textContent = myHeading.textContent;
  myHeading1.textContent = myHeading.textContent;

  $("#liquid2").css("height", 0+"%");
  $("#liquid2").css("border", 0+"px");
}
else{
  myHeading1.textContent = myHeading.textContent;
  myHeading2.textContent = (Math.round(((/*18-*/value)/18.0) * 100)/100).toFixed(2);
  $("#liquid").css("height",(((/*18-*/value)*100/18))+"%");
  //$("#liquid").css("border", ((((/*18-*/value)*10)/18))+"px solid #0e83cd");  
  //$("#liquid").css("width", (((/*18-*/value)*180)/18)+"px");


  $("#liquid2").css("height",(((/*18-*/value)*100/18))+"%");
  //$("#liquid2").css("border", ((((/*18-*/value)*10)/18))+"px solid #0e83cd");  
  //$("#liquid2").css("width", (((/*18-*/value)*180)/18)+"px");
}

});











//$("#liquid").css("height",(((18-value)*18/170)*100)+"%");
/*
$(document).ready(

if ($("#first_bar").click()) {
function first_bar_level(){
var myHeading = document.querySelector("#text1");
var value = $("#first_bar").val();
myHeading.textContent = 18-value;
}
});
*/  
