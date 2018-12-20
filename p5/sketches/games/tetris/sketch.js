var score = 0;
var difficulty = score/500;
var newPentrimino;

function setup() {
	createCanvas(300,400);
	newPentrimino = new pentrimino();
}

function draw() {
	background(51);
	newPentrimino.update();
	newPentrimino.show();
}

function keyPressed() {
	if (keyCode === UP_ARROW) {
		newPentrimino.pos(0,0,1)
	}
	else if (keyCode === DOWN_ARROW) {
		newPentrimino.pos(0,1,0)
	}
	else if (keyCode === RIGHT_ARROW) {
		if (newPentrimino.x >= width-15){
			newPentrimino.pos(-1,0,0)
		}
		newPentrimino.pos(1,0,0)
	}
	else if (keyCode === LEFT_ARROW) {
		if (newPentrimino.x <= 0){
			newPentrimino.pos(1,0,0)
		}
		newPentrimino.pos(-1,0,0)
	}
}