let scl = 10;
let cols, rows;



function setup() {
	createCanvas(200,200)
	cols = floor(width/scl);
	rows = floor(height/scl);
}

let zoff = 0;
let step = 0.1

function draw() {
	background(255)
	let xoff = 0;
	for(let x=0; x<cols; x++){
		let yoff = 0;
		for(let y=0;y<rows; y++){
			let index = x+y*rows;
			let angle = noise(xoff,yoff,zoff)*TWO_PI;
			var v = p5.Vector.fromAngle(angle)
			yoff +=step;
			stroke(0)
			push();
				translate(x*scl,y*scl);
				rotate(v.heading())
				line(0,0,scl,0)
			pop();
			
		}
		xoff += step;
	}
	zoff +=step/10;
}

function Particle(){
	this,pos = createVector(0,0);
	this,vel = createVector(0,0);
	this,acc = createVector(0,0);
	
	this.update = function(){
		this.vel.add(this.acc);
		this.pos.add(this.vel);
		this.acc.mult(0);
	}
	
	this.applyForce = function(force){
		this.acc.add(force)
	}
}