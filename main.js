function setup(){
    video = createCapture(VIDEO);
    video.size(550, 550);
    video.position(140,150);

    canvas = createCanvas(550,500);
    canvas.position(860,150);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on("pose", gotPoses);
}

function modelLoaded(){
    console.log("PoseNet Is Initialized");
}

function draw(){
    background('#FF6347');
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);
    }
}

