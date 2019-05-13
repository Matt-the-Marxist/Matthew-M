let G = 6.67408*Math.pow(10,-11)
let scl = 4000
let planets = []


function setup() {
	createCanvas(1200, 1200)
	//planets.push(new Planet(0, 0, 0, 0, 1.9891*pow(10,30), "sun"))
	planets.push(new Planet(227939200000, 0, 0, 24007, 6.4171*pow(10,24), "mars"))
	planets.push(new Planet(227939200000-9234420, 0, 0, 24007-2138 , 1.0659*pow(10,16), "phobos"))
	planets.push(new Planet(227939200000+23463200, 0, 0, 24007+1351.3, 1.4762*pow(10,15), "deimos"))
	background(0)
}

function draw() {
	background(0, 10)
	translate(width/2-planets[0].pos.x/scl, height/2-planets[0].pos.y/scl)
	for(let i=0;i<planets.length;i++){
		planets[i].show()
	}
	for(let i=0;i<10;i++){
		for(let j=0; j<planets.length; j++){
			for(let k=planets.length-1; k>j; k--){
				grav(planets[j],planets[k])
				console.log(planets[j].name,planets[k].name)
			}
		}
		for(let j=0; j<10;j++){
			for(let j=0; j<planets.length;j++){
				planets[j].update()
			}
		}
		for(let j=0; j<planets.length; j++){
			if(planets[j].pos.dist(planets[0].pos)/scl>(width/2)){
				scl = planets[j].pos.dist(planets[0].pos)/(.4*width);
				background(0)
			}			
		}
	}
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
	
	p1.acc.add(d1.mult(f/p1.mass))
	p2.acc.add(d2.mult(f/p2.mass))
	p1.update();
	p2.update();
}

function Planet(x, y, vx, vy, mass, name){
	this.mass = mass;
	this.name = name;
	this.pos = createVector(x, y)
	this.vel = createVector(vx, vy)
	this.acc = createVector(0, 0)
	
	this.show = function(){
		stroke(255)
		strokeWeight(10)
		point(this.pos.x/scl, this.pos.y/scl)
	}
	
	this.update = function(){
		this.pos = this.pos.add(this.vel);
		this.vel = this.vel.add(this.acc)
		this.acc = this.acc.mult(0)
	}
}