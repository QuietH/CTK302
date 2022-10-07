let numberOfTouches ;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  clear();
  numberOfTouches = touches.length;
  text(numberOfTouches + ' touches', 5, 10);

  switch(numberOfTouches) {
    case 0: 
      text("Peace and Tranquility", 5, 22) ; 
      break ;

      case 1: 
       text("Meditation", 5, 22) ; 
      // put a picture here
      break ;

      case 2:
      text("Human Connection", 5, 22) ; 
            // put a picture here
      break ;

      case 3:
     text("There are now too many touches, please minimize the amount.", 5, 22) ; 
            // put a picture here
      break ;


  }

}