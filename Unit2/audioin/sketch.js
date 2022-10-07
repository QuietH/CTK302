let mic;
let vol = 0;
let approachingVol = 0;
let x = 0;
let i1;

// variables that you might want to tweak
let theLoudestItGets = 0.2; // check your mic inputs and see how loud it gets, put it here.
var ease = 0.08; // how responsive do you want this? Higher numbers mean faster response.

function setup() {
	createCanvas(400, 400);

  i1 = loadImage("assets/sad.png");

	// code for initializing mic in.
	mic = new p5.AudioIn(); // what does "new" mean?
	mic.start();
}

function draw() {
	background("#837EE5");

	// get the sound input
	vol = mic.getLevel(); // returned level is between 0 and 1

	// make a "gradual" easing variable that approaches the original vol
	approachingVol += (vol - approachingVol) * ease;

	// text on the screen for debugging
	textSize(18);
	text(
		"Please click the button\nso I can take your\npersonal data: " +
			vol.toFixed(3) +
			"\nScreaming Vol = " +
			approachingVol.toFixed(3),
		10,
		60
	);

	// this moves that first box
	//  x = vol*200 ;
	// x = map(vol, 0, theLoudestItGets, 0, width);

	x = x + vol * 10;
  if (x > width) x = 0 ; 

	image(i1, x, 200, 50, 50);
}

// you need this code for audio programs and also, the user
// needs to click the screen before the mic input will work.

function touchStarted() {
	getAudioContext().resume();
}
