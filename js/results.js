let queryString = window.location.search;
let urlParams = new URLSearchParams(queryString);
let background = new Image();
background.src = "https://yetdarkerdevelopment.github.io/dndalignment/images/dndcompass.png";
let dot = new Image();
dot.src = "https://yetdarkerdevelopment.github.io/dndalignment/images/dnddot.png";
let law = urlParams.get("law") * 333 / 14 + 333; // + 17;
let evil = urlParams.get("evil") * 333 / 9 + 333; // + 17;
let canvas = document.getElementById("result_dot_canvas");
let context = canvas.getContext("2d");
background.onload = function(){
    context.drawImage(background, 0, 0, canvas.width, canvas.height);   
}
dot.onload = function(){
    context.drawImage(dot, 666 - law, evil);   
}