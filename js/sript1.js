var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
ctx.font = "20px Arial";
ctx.fillText("Загрузить фотографию",40,220);


function myCanvas() {
    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");
    var img = document.getElementById("scream");
    ctx.drawImage(img,10,10);
    
}


