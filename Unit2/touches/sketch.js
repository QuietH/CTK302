let numberOfTouches ;

function setup() {
  createCanvas(400, 400);
  textAlign(CENTER);
  imagesMode (CENTER) ;
}

function draw() {
  clear();
  numberOfTouches = touches.length;
  textSize(20);
  text(numberOfTouches + ' touches', width / 2, 225);
  
  switch(numberOfTouches) {
    case 0: 
    textSize(20);
      text("Thank God, no one is here.", width / 2, height/2) ; 
      break ;
      
      case 1: 
      textSize(20);
      text("Who are you", width / 2, height/2) ; 
      // put a picture here
      break ;
      
      case 2:
      textSize(20);
      text("Why are you doing this", width / 2, height/2) ; 
            // put a picture here
      break ;
      
      case 3:
      textSize(20);
       text("I'M DOOMED", width / 2, height/2) ; 
            // put a picture here
      break ;
    
      
  }
  
}