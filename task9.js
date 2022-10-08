var canvas= document.getElementById("myCanvas");
var face = canvas.getContext("2d");
var faceCenterX = canvas.width / 2;
var faceCenterY = canvas.height / 2;
var faceRadius = 70;

function myFace() {
    face.beginPath();
    face.arc(faceCenterX, faceCenterY, faceRadius, 0, 2 * Math.PI, false);
    face.fillStyle = "yellow";
    face.fill();
    face.lineWidth = 5;
    face.strokeStyle = "#003300";
    face.stroke();
}
function eye() {
    var canvas = document.getElementById("myCanvas");
    var eye  = canvas.getContext("2d");
    eye.moveTo(150, 50);
    eye.beginPath();
    eye.fillStyle = "black";
    eye.arc(265, 70, 4, 0, Math.PI * 2, true);    
    eye.closePath();    
    eye.fill();  
    eye.moveTo(150, 49);
    eye.beginPath();
    eye.fillStyle = "black";
    eye.arc(315, 69, 4, 0, Math.PI * 2, true);    
    eye.closePath();    
    eye.fill(); 
}
function smile() {
    var canvas = document.getElementById("myCanvas");
    var smile  = canvas.getContext("2d");
    smile.moveTo(0, 0);
    smile.beginPath();
    smile.strokeStyle = "black";
    smile.arc(290, 100, 30, 0, Math.PI, false);
    smile.stroke();
}

myFace();
eye();
smile();
