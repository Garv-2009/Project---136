
function preload(){
}
function setup(){
   
    canvas  = createCanvas(400,400);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
}
function draw(){
    image(video,0,0,400,400)
}
function start(){
    objectDetector = ml5.objectDetector("cocossd",modelloaded);
    document.getElementById("status").innerHTML = "Status: Object Detecting";
}
function modelloaded(){
    console.log("model");
    status = true;
}