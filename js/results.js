let queryString = window.location.search;
let urlParams = new URLSearchParams(queryString);
let background = new Image();
background.src = "https://yetdarkerdevelopment.github.io/dndalignment/images/dndcompass.png";
let law = urlParams.get("law") * 666 / 14 + 17;
let evil = urlParams.get("evil") * 666 / 9 + 17;
console.log(law);
console.log(evil);
let canvas = document.getElementById("result_dot_canvas");
console.log(canvas.width);
console.log(canvas.height);
let context = canvas.getContext("2d");
background.onload = function(){
    context.drawImage(background, 0, 0, canvas.width, canvas.height);   
}
context.lineWidth = 33;
context.beginPath();
context.moveTo(law, evil);
context.lineTo(law, evil);
context.stroke();