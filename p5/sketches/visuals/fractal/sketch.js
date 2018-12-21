function setup() {
	createCanvas(800,800)
}

function draw() {
	background(51);
	stroke(255);
	noFill();
	triangleThing(width/3, y, 2 * width / 3, y, width/2, height/3);
}

function triangleThing(x, y, a, b, v, w){
	triangle(x, y, a, b, v, w);
	
}