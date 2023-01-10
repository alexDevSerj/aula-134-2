var img = "";
var status = "";
var object = [];

function preload(){
  
}

function setup(){
  canvas = createCanvas(380,380)
  canvas.center()

 video = createCapture(VIDEO)
 
}


function draw(){
  image(video,0,0,380,380)
}