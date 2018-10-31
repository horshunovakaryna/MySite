
function toggle() {
     var obj = document.getElementById("main_page1"); 
        if (obj.style.display != "block") { 
             obj.style.display = "block"; 
        }
        else obj.style.display = "none"; 
}

function mouseOver(row){
     row.style.backgroundColor = '#D3D3D3';
}
 
function mouseOut(row){
	   row.style.backgroundColor = '';
}

    
function hotkeys(e) {
     if (!e) e = window.event;
       var k = e.keyCode;
       if (e.ctrlKey && k == 90 ) { // Сначала пусть будет нажат Ctrl
            d = document.getElementById("intel");       
       }

       if (e.ctrlKey && k == 81) { // Сначала пусть будет нажат Ctrl
            location.href = "#tem";      
       }


    if (d) location.href = d.href;

 }
 
 function initial() {
 	    document.onkeydown = hotkeys;
 	    start();
 	    setInterval(next, 3000);
 }

 function validateForm() {
    var x = document.forms["Blog"]["tema"].value;
    var y = document.forms["Blog"]["sms"].value;
    var z = document.forms["Blog"]["mai"].value;
    if (x == "" || y == "" || z == "") {
        alert("Заполните все поля");
        return false;
    }
    var reg = /^([a-zA-Z\d\.]+)(@[a-zA-Z]+\.[a-zA-Z]{2,3})$/;
    if(!reg.test(z)){
    	  alert("E-mail введен неверно!");
        return false;
    }

   return true;
}

function imgZoom(srcP){
	var modal = document.getElementById('myModal');
  var modalImg = document.getElementById("img01");
      modal.style.display = "block";
      modalImg.src = srcP;
}

function closes(){
var modal = document.getElementById('myModal');
var span = document.getElementsByClassName("close")[0]; 
    modal.style.display = "none";
}

var width = 200; 
    var count = 1; 

    var carousel = document.getElementById('carousel');
    var list = carousel.querySelector('ul');
    var listElems = carousel.querySelectorAll('li');
    var position = 0; 

    function prev() {
     position = Math.min(position + width * count, 0)
     list.style.marginLeft = position + "px";
    }

    function next() {
      position = Math.max(position - width * count, -width * (listElems.length - count));
      list.style.marginLeft = position + "px";
    }

    carousel.querySelector('.prev').onclick = prev;
    carousel.querySelector('.next').onclick = next;



    