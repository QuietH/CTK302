// Note - use your own APPID to get this to work!

let weather;
let weatherID = 0; // returned in the JSON weather element
let state = 0;
let x = 0;
let windspeed = 0;
let temperature = 0;
let humidity = 0;
let f1;
let bird;
let island;


function setup() {
  createCanvas(800, 800);
  f1 = loadFont("assets/rajdhani.ttf");
  bird = loadImage("assets/dam2.png");
  easter = loadImage("assets/easter.jpg");

  // HERE is the call to get the weather. We build the string first.

  let myCityString =
    "https://api.openweathermap.org/data/2.5/weather?q=Naperville,IL,US&units=imperial&";

  //You can also use "zipcode"
  // substitute zip=61820 for q=Normal,IL,US
 

 // let myIDString = "appid=xxxxx"; // put your ID instead of xxxxx
  
  let myIDString = "appid=c508336ca803f1a740bbd7edc9e702ec" ;

  let myTotalString = myCityString + myIDString;
  

  loadJSON(myTotalString, gotData); // that gotData function happens when JSON comes back.
}

function gotData(data) {
  weather = data;
  print(weather); // for debugging purposes, print out the JSON data when we get it.
  windspeed = weather.wind.speed;
  temperature = weather.main.temp;
  humidity = weather.main.humidity;

}

function draw() {
  switch (state) {
      
    case 0:
      if (weather) {
        state = 1;
      }
      break;

    case 1:
      image(easter, 00, 00, 800, 800);

      fill("white");
      textFont(f1, 40);
      stroke("white");
      text("What is the weather in " + weather.name + "?", 20, 500);
      text("The windspeed is " + windspeed + ".", 20, 550);
      text("The temperature is " + temperature  + ".", 20, 600);
      text("The humidity is " + humidity + "%"  + ".", 20, 650);
      text("The description is " + weather.weather[0].description  + ".", 20, 700);
      text("The bird tells the world how fast we are.", 20, 750);

      // cloud
      fill("white");
      noStroke();
      image(bird, x, 150, 200, 300);

      // move the cloud's x position
      x = x + windspeed / 3;
      if (x > width) x = -50;

      break;
  }
}

