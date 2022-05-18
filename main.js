object=[];
status="";

function setup(){
    cavas=createCanvas(380,380);
canvas.center();
video=createCapture(VIDEO);
video.size(380,380)
video.hide()
}

function modelLoaded(){
    console.log("Model loaded!")
    status=true;
}

function start(){
    objectDetector=ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("status".innerHTML="Status : Detecting Objects");
object_name=document.getElementById("object_name").value;
}