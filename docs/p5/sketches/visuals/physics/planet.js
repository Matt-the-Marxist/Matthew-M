function Planet(x1, y1, x2, y2, mass){
	
	this.mass = mass;
	this.pos = createVector(x1, y1);
	this.vel = createVector(x1-x2, y1-y2);
	this.acc = createVector(0, 0)
	
	this.show = function(){
		stroke(255);
		strokeWeight(4)
		point(this.pos.x/15150000000, this.pos.y/15150000000)
	}
	
	this.update = function(){
		this.pos.add(this.vel);
		this.vel.add(this.acc);
		this.acc.mult(0);
	}

	
}

