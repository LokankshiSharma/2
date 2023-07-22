function setup(){
    canvas=createCanvas(500, 500);
  canvas.position(500,90);
  video=createCapture( VIDEO );
  video.size(500, 300);
  PoseNet=ml5.poseNet(video, modelLoaded);
  PoseNet.on("pose", gotResult)
  }
  function draw(){
    background("cadetblue");

  }
  function modelLoaded(){
    console.log("PoseNet is initialized");
  }
  function gotResult(results){
  if (results.length>0)
  {
  console.log(results)
  }
  }
