var sinewave = [];

var angle = 0;
var x = 0;
var y = 0;
var xOffset = 300;

const MIDPOINTCIRCLE = 200;

const XMOVEMENT = 1.5;
const AMPLITUDE = 170;


function setup() 
{
	createCanvas(1300, 900);
	stroke(255);
}

function draw()
{
	frameRate(60);
	background(55);
	angle += 0.02;

	//Calculating x and y
	x = MIDPOINTCIRCLE + xOffset; //!______________________________!
	y = sin(angle) * AMPLITUDE + height/2;
	sinewave.push({x, y});


	// Circle, Lines and Triangle
	ellipse(MIDPOINTCIRCLE, height/2, AMPLITUDE * 2, AMPLITUDE * 2);

	//Triangle
	line(MIDPOINTCIRCLE, height/2, MIDPOINTCIRCLE + cos(angle) * AMPLITUDE, height/2 + sin(angle) * AMPLITUDE);
	line(MIDPOINTCIRCLE, height/2, MIDPOINTCIRCLE + cos(angle) * AMPLITUDE, height/2);

	//Bluefill
	fill(0, 0, 255);
	beginShape();
	vertex(MIDPOINTCIRCLE, height/2);
	vertex(MIDPOINTCIRCLE + cos(angle) * AMPLITUDE, height/2 + sin(angle) * AMPLITUDE);
	vertex(MIDPOINTCIRCLE + cos(angle) * AMPLITUDE, height/2);
	endShape();

	//Redline
	stroke(255, 0, 0);
	line(MIDPOINTCIRCLE + cos(angle) * AMPLITUDE, height/2 + sin(angle) * AMPLITUDE, MIDPOINTCIRCLE + cos(angle) * AMPLITUDE, height/2);
	
	//Connection to wave (green line)
	stroke(0, 255, 0);
	line(MIDPOINTCIRCLE + cos(angle) * AMPLITUDE, height/2 + sin(angle) * AMPLITUDE, MIDPOINTCIRCLE + xOffset, height/2 + sin(angle) * AMPLITUDE);
	stroke(255);
	
	//Axis
	line(0, height/2, width, height/2);
	line(MIDPOINTCIRCLE, 0, MIDPOINTCIRCLE, height);


	//Drawing of the Sinewave
	noFill();
	beginShape();
	// console.log(sinewave);
	for (var i = sinewave.length - 1; i > 0; i--) {
		
		sinewave[i].x += XMOVEMENT;
		if (sinewave[i].x > width) {
			sinewave.splice(i, 1);
		}
		//point(sinewave.get(i).x * 5, sinewave.get(i).y);
		//print(sinewave.get(i) + "\n\n");
		vertex(sinewave[i].x, sinewave[i].y);

		// console.log(cos(angle) * AMPLITUDE + "\n\n");
	}
	endShape();
}
