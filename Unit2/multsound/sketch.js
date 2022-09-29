let state = -1;
let s1, s2, s3 ;

function preload() {
  s1 = loadSound("assets/duvet.mp3");
  s2 = loadSound("assets/hell.mp3");
  s3 = loadSound("assets/star.mp3");
}

function setup() {
  createCanvas(800, 800);
  textAlign(CENTER);
}

function draw() {

  background(100);
  
  switch (state) {

    case -1:
      textSize(50);
      text("Please Click to Start", width / 2, height/2);
      break;

    case 0:
      background("#837EE5");
      textSize(50);
      text("Duvet - Boa", width / 2, height/2);
      if (!s1.isPlaying()){
        s1.play();
      }
      break;

    case 1:
      background("#63661a");
      textSize(40);
      text("Hell's Comin' with Me - Poor Mans Poison", width / 2, height/2);
      if (!s2.isPlaying()){
        s2.play();
      }
      break;

    case 2:
      background("#ef5d5d");
      textSize(50);
      text("Red Stars - The Birthday Massacre", width / 2, height/2);
      if (!s3.isPlaying()){
        s3.play();
      }
      break;

  }
}

function mouseReleased() {
  s1.stop() ;
  s2.stop() ;
  s3.stop() ;
  state++;
  if (state > 2) state = 0;

}

function touchStarted() {
  getAudioContext().resume();
}