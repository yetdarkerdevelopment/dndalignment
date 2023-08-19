let queryString = window.location.search;
let urlParams = new URLSearchParams(queryString);
let background = new Image();
background.src = "https://yetdarkerdevelopment.github.io/neuralnetwork_politics/images/dndcompass.png";
let law = urlParams.get("law") * 666 / 14 + 17;
let evil = urlParams.get("evil") * 666 / 9 + 17;
let canvas = document.getElementById("result_dot_canvas");
let context = canvas.getContext("2d");
background.onload = function(){
    context.drawImage(background, 0, 0);   
}
context.lineWidth = 33;
context.beginPath();
context.moveTo(law, evil);
context.stroke();