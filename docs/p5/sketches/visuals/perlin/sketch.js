let scl = 4;
let cols, rows;

let particles = []
let flowfield = []
let noParticles = 5;

function setup() {
	createCanvas(480,320)
	cols = floor(width/scl);
	rows = floor(height/scl);
	for(let i=0; i<noParticles; i++){
		particles[i]=new Particle();
	}
	background(255)
}

let zoff = 0;
let step = 0.1


function draw() {
	let xoff = 10;
	for(let x=0; x<cols; x++){
		let yoff = 10;
		for(let y=0;y<rows; y++){
			let index = x+y*rows;
			let angle = noise(xoff,yoff,zoff)*TWO_PI;
			var v = p5.Vector.fromAngle(angle);
			flowfield[index] = v;
			v.setMag(0.5);
			yoff +=step;
			stroke(0,50);
			push();
				translate(x*scl,y*scl);
				rotate(v.heading());
				strokeWeight(1);
				//line(0,0,scl,0);
			pop();
			
		}
		xoff += step;
	}
	zoff +=step/10;
	for(let i=0; i<noParticles; i++){
		particles[i].follow(flowfield)
		particles[i].update()
		particles[i].show()
		particles[i].edge()
	}
	
	
}

function Particle(){
	this.pos = createVector(random(width),random(height));
	this.vel = p5.Vector.random2D();
	this.acc = createVector(0,0);
	this.maxSpeed = 4;
	this.previousPos;
	
	this.update = function(){
		this.vel.add(this.acc);
		this.vel.limit(this.maxSpeed);
		this.previousPos = this.pos.copy();
		this.pos.add(this.vel);
		this.acc.mult(0);
	}
	
	this.applyForce = function(force){
		this.acc.add(force);
	}
	
	this.show = function(){
		strokeWeight(1);
		stroke(map(this.pos.x, 0, width, 0, 255), 0, map(this.pos.y, 0, height, 0, 255), 50);
		line(this.previousPos.x, this.previousPos.y,this.pos.x, this.pos.y);
	}
	this.edge = function(){
		if(this.pos.x > width){
			this.pos.x = 0
			this.previousPos = this.pos.copy();
		}
		if(this.pos.x < 0){
			this.pos.x = width
			this.previousPos = this.pos.copy();
		}
		if(this.pos.y > height){
			this.pos.y = 0
			this.previousPos = this.pos.copy();
		}
		if(this.pos.y < 0){
			this.pos.y = height
			this.previousPos = this.pos.copy();
		}	
	}
	
	this.follow = function(arr){
		var x = floor(this.pos.x/scl);
		var y = floor(this.pos.y/scl);
		var index = x+y*rows;
		this.applyForce(arr[index]);
	}
	
}