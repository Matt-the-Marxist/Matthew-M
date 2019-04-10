G = 6.67408*Math.pow(10,-11)

let earth;
let moon;

function setup() {
	createCanvas(1200, 1200)
	earth = new Planet(0, 0, 0, 0, 5.972*pow(10,24))
	moon = new Planet(405400, 0, 0, 1022, 7.348*pow(10,22))
	grav(earth, moon)
	background(0)
}

function draw() {
	translate(width/2-moon.pos.x/680, height/2-moon.pos.y/680)
	background(0,1)
	grav(earth, moon)
	earth.show()
	moon.show()
	earth.update()
	moon.update()
}

function force(p1, p2){
	d = p1.pos.dist(p2.pos)
	f = G*(p1.mass*p2.mass)/(d*d)
	return f
}

function grav(p1,p2){
	d1 = p2.pos.copy().sub(p1.pos).normalize()
	d2 = p1.pos.copy().sub(p2.pos).normalize()

	f = force(p1,p2)
	
	p1.acc.add(d1.mult(force/p1.mass))
	p2.acc.add(d2.mult(force/p2.mass))
}

function Planet(x, y, vx, vy, mass){
	this.mass = mass;
	this.pos = createVector(x, y)
	this.vel = createVector(vx, vy)
	this.acc = createVector(0, 0)
	
	this.show = function(){
		stroke(255)
		strokeWeight(10)
		point(this.pos.x/680, this.pos.y/680)
	}
	
	this.update = function(){
		this.pos = this.pos.add(this.vel);
		this.vel = this.vel.add(this.acc)
		this.acc = this.acc.mult(0)
	}
}