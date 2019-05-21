let bob;
let grav = 9.80665;

function setup() {
	createCanvas(400, 400);
	bob = new Bob(30, 201)
}

function draw() {
	translate(width/2, 0)
	background(0)
	bob.update();
	bob.show();
}

function Bob(mass, len){
	let x = -200;
	let y = sqrt(len*len-200*200);
	console.log(y)
	this.length = len
	this.pos = createVector(x, y);
	this.vel = createVector(0, 0);
	this.acc = createVector(0, 0);
	this.mass = mass
	
	this.show = function(){
		stroke(255)
		line(0, 0, this.pos.x, this.pos.y)
		ellipse(this.pos.x, this.pos.y, this.mass, this.mass)
	}
	
	this.update = function(){
		this.pos.add(this.vel);
		this.vel.add(this.acc);
		this.acc.mult(0);
		this.pos.normalize().mult(this.length)
		
		this.angle = this.pos.heading()
		print((grav*sin(this.angle))/this.mass)
		this.acc.add((grav*sin(this.angle))/this.mass)
	}
}
