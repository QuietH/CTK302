let cars = [];

let i1;
function setup() {
  createCanvas(500, 500);
  noStroke();

  i1 = loadImage("assets/night.jpg");

  // Spawn one object
  // for (let i = 0 ; i < 20 ; i++){
  //   cars.push(new Car());
  // }

}

function draw() {
  background("black");
  image(i1, 0, 0, 500, 500);
  cars.push(new Car());
  for (let i = 0 ; i < cars.length ; i++){
    cars[i].display();
    cars[i].move();
    if (cars[i].a <= 0) {
      cars.splice(i, 1);
    }
  }
  push();
  fill("#714F2C");
  rotate(PI / 10.0);
  rect(342,320, 50, 15,);
  pop();

  push();
  fill("#714F2C");
  rotate(PI / -10.0);
  rect(80, 470, 50, 15,);
  pop();
}

class Car {

  // constructor
  constructor() {
    this.pos = createVector(width/2, height - 80) ;  // initialize your attributes here
    this.vel = createVector(random(-2,2), random(-10,-5)) ; 
    this.r = 230;
    this.g = 0;
    this.b = 0;
    this.a = random(200, 255);
  }

  // methods

  display() {
    fill(this.r, this.g, this.b, this.a);
    ellipse(this.pos.x, this.pos.y, 20);
  }

  move() {
    this.pos.add(this.vel);
    this.a = this.a - 5;
  }
  
}