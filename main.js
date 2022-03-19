lwx = 0;
ewx = 0;
d = 0;

function setup() {
    video = createCapture(VIDEO);
    video.size(550, 500);

    canvas = createCanvas(550, 550);
    canvas.position(560, 150);
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);

}

function draw() {
    background("yellow");
    document.getElementById("span1").innerHTML = "Font size of the text will be "+d+"px";
    textsize(d);
    fill("green");
    text('Divyansh', 50, 400);

}

function modelLoaded() {
    console.log("poseNet is Initialized");
}

function gotPoses(results) {
    if (results.length > 0) {
        console.log(results);
    }

    if (results.length > 0) {
console.log(results);
lwx = results[0].pose.leftWrist.x;
rwx = results[0].pose.rightWrist.x;

d = floor(lwx - rwx);
console.log("rightWrist_x = "+results[0].pose.rightWrist.x + " rightWrist_y = "+results[0].pose.rightWrist.y);
        console.log("leftWrist_x = "+results[0].pose.leftWrist.x + " leftWrist_y = "+results[0].pose.leftWrist.y);
    }

}