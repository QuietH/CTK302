var bubbles = [];
let url = "";
let f1;

// https://docs.google.com/spreadsheets/d/1FjVAYOThyQLVZVJS2GXSwErWBZUjHDK-CEURjkfvOng/edit?resourcekey#gid=1331495145

// https://forms.gle/tfuKNrtZtVzRKxUu7

function setup() {
  
    let key = "1FjVAYOThyQLVZVJS2GXSwErWBZUjHDK-CEURjkfvOng"; // this is KEY of the URL from the sheet

  url = "https://opensheet.vercel.app/" + key + "/Form+Responses+1"; // here I'm making the string for loadJSON.

  loadJSON(url, gotData);

  // Regular setup code we usually have
  f1 = loadFont("assets/rajdhani.ttf");
  createCanvas(800, 800);
  textAlign(CENTER);
  ellipseMode(CENTER);
  rectMode(CENTER);
}

// The data comes back as an array of objects

function gotData(data) {
  console.log(data); // Print the data in the console

  // add each line to an array of bubbles
  for (let i = 0; i < data.length; i++) {
    bubbles.push(
      new Bubble(
        data[i]["What is your name?"],
        data[i]["Who would win?"],
        data[i]["What is the color of their galaxy?"],
        data[i]["Did you see it?"],
        data[i]["How many seconds do I have left?"])); // THESE NEED TO MATCH SPREADSHEET
    
  }
}

function draw() {
  background("black");

  // // iterate through the bubbles and display the objects!
  for (let i = 0; i < bubbles.length; i++) {
    bubbles[i].display();
    bubbles[i].move();
  }
}

// my Bubble class
class Bubble {
  constructor(name, fight, color, see, time) {
    // only the order of these parameters matters!
    this.color = color;
    this.name = name;
    this.fight = fight;
    this.see = see;
    this.time = time;
    
    this.r = random(255);
    this.g = random(255);
    this.b = random(255);
    
    this.velocity = createVector(random(-3, 3), random(-3, 3));
    this.pos = createVector(random(width), random(height));
    this.vel = createVector(random(2, 5), 0);
  }

  display() {
    stroke(this.r, this.g, this.b); 
    fill("black");
    ellipse(this.pos.x, this.pos.y+25, 120, 120);
    fill("white");
    textFont(f1);
    text(
      this.name + "\n" + this.fight + "\n" + this.color + "\n" + this.see + "\n" + this.time,
      this.pos.x,
      this.pos.y
    );
    
  }
  
  
    move() {
    this.pos.add(this.velocity);
    if (this.pos.x > width) this.pos.x = 0;
    if (this.pos.x < 0) this.pos.x = width;
    if (this.pos.y > height) this.pos.y = 0;
    if (this.pos.y < 0) this.pos.y = height;
  }
  
  
  
}
