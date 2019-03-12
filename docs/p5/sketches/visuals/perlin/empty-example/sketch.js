let cols,rows;
let scl = 20;

let w = 1200;
let h = 1200;

let terrain = []

let flying = 0;

function setup() {
	createCanvas(600, 600, WEBGL)
	cols = w/scl;
	rows = h/scl;
}

function draw() {
	background(0)
	stroke(255)
	noFill()
	
	var yoff =flying;
	for(let y=0; y<rows; y++){
		var xoff = 0
		for(let x=0; x<cols; x++){
			index = x+y*rows;
			terrain[index] = map(noise(xoff, yoff),0,1,-100,100)
			xoff+=0.1
		}
		yoff+=0.1
	}

	rotateX(PI/3)
	
	translate(-w/2, -h/2)
	
	for(let y=0; y<rows; y++){
		beginShape(TRIANGLE_STRIP);
		for(let x=0; x<cols; x++){
			index = x+y*rows;
			vertex(x*scl, y*scl, terrain[index])
			vertex(x*scl, (y+1)*scl, terrain[index+rows])
		}
		endShape()
	}
	flying-=0.2
}