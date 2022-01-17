left_wrist_x =0;
right_wrist_x = 0;
difference =0;
function setup(){
 video = createCapture(VIDEO);
 video.size(400,400);
 video.position(10,50);

 canvas = createCanvas(400,400);
 canvas.position(430,130);

 poseNet = ml5.poseNet(video,modelDone);
 poseNet.on('pose',gotposes);

}
function modelDone(){
    console.log("poseNet Is Initialized And Loaded");

}
function draw(){
    background("#5196e3");
    document.getElementById("square_side").innerHTML="Font size of the text = "+difference+"px";
    fill("#00ff0a");
    textSize(difference);
    text('Arvind',50,400);

}
function gotposes(results,error){
    if(error){
        console.error(error);
    }
    if(results.length > 0){
        console.log(results);

right_wrist_x = results[0].pose.rightWrist.x;
left_wrist_x = results[0].pose.leftWrist.x;

difference = floor(left_wrist_x - right_wrist_x);

        console.log("rightWrist_x = "+results[0].pose.rightWrist.x + " rightWrist_y = "+results[0].pose.rightWrist.y);
        console.log("leftWrist_x = "+results[0].pose.leftWrist.x + " leftWrist_y = "+results[0].pose.leftWrist.y);
    }
}