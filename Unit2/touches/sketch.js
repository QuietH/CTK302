let numberOfTouches ;
let i1, i2, i3, i4 ;


function setup() {
  createCanvas(400, 400);
  i1 = loadImage("assets/car.jfif");
  i2 = loadImage("assets/car2.png");
  i3 = loadImage("assets/woopsS.png");
  i4 = loadImage("assets/pie.png");
  imageMode(CENTER);
}

function draw() {
  clear();
  numberOfTouches = touches.length;
  text(numberOfTouches + ' touches', 160, 70);

  switch(numberOfTouches) {
    case 0: 
      text("Thank God,\nNo one is here.", 160, 90) ; 
      image(i2, width/2, height/2, 100, 100);
      break ;

      case 1: 
       text("Can you leave\nme alone?", 160, 90) ; 
       image(i1, width/2, height/2, 100, 100);
      break ;

      case 2:
      text("Please don't\ndo this.", 160, 90) ; 
      image(i3, width/2, height/2, 100, 100);
      break ;

      case 3:
     text("This is the\nworst day of my life.", 160, 90) ; 
     image(i4, width/2, height/2, 100, 100);
      break ;


  }

}