function setup() {
	createCanvas(800,800)
}

function draw() {
	background(51);
	stroke(255);
	noFill();
	circleFractal(width/2, height/2, height/3);
}

function circleFractal(x, y, w){
	ellipse(x, y, w, w);
	if(x>10){
		circleFractal(x-x/3,y,w/2);
		circleFractal(x+x/3,y,w/2);
	}
}