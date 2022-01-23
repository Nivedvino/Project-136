video= "";
status= "";

function setup() {
    canvas= createCanvas(390, 390);
    canvas.center();
}

function preload() {
    video= createVideo("video.mp4");
    video.hide();
}

function draw() {
    image(video, 0, 0, 390, 390);
}

function start() {
    objectdetector= ml5.objectDetector("cocossd", modelLoaded);
    document.getElementById("status").innerHTML= "Status: Detecting Objects";
}

function modelLoaded() {
    console.log("Model is Loaded");
    status= true;
    video.speed(1);
    video.volume(1);
    video.loop();
}