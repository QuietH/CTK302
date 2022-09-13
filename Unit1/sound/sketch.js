let service ;

function preload() {
  service = loadSound("assets/service.mp3");
}

function setup() {
  createCanvas(500, 500);
  service.play();
}

function draw() {
  background("black");
  fill("white");
  text("In the Service of the Enemy", 100, 100, 400, 400);
}

function mouseReleased(){
  if (service.isPlaying()) {
      service.pause();
  } else {
    service.play();
  }
}


function touchStarted() {
  getAudioContext().resume();
}