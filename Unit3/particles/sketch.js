let cars = [];
function setup() {
  createCanvas(500, 500);

  // Spawn one object
  for (let i = 0 ; i < 20 ; i++){
    cars.push(new Car());
  }

}

function draw() {
  background(100);
  for (let i = 0 ; i < car.length ; i++){
    car.display();
    cars.move();
  }
  fill('white') ;

}

class Car {

  // constructor
  constructor() {
    this.pos = createVector(width/2, height/2) ;  // initialize your attributes here
    this.vel = createVector(random(-3,3), random(-3,3)) ; 
  }

  // methods

  display() {
    ellipse(this.pos.x, this.pos.y, 20);
  }

  move() {
    this.pos.add(this.vel);
  }
  
}