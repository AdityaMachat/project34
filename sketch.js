var canvas;
var paint=[];
var curentPath=[];
function setup(){
canvas=createCanvas(1600,1000);
canvas.mousePressed(startPath);
}
function draw(){
background(0);
if(mouseIsPressed){
    var point= {
        x:mouseX,
        y:mouseY
    }
    curentPath.push(point);
}
strokeWeight(5);
stroke(255);
noFill();
for(var i=0;i<paint.length;i++){
    var path =paint[i];
    beginShape();
    for(var j=0;j<path.length;j++){
        vertex(path[j].x,path[j].y);
    }
    endShape();

}

}
function startPath(){
    curentPath=[];
    paint.push(curentPath);
}