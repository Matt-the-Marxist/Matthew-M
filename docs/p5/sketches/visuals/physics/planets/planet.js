function Planet(...args){
	let [name, mass, radiusOfOrbit, moons, orbitCenter] = args
	this.mass = mass
	this.moons = []
	this.name = name
	
	this.pos = (name=="sun")?createVector(0,0):createVector(0, orbitCenter.pos.y+radiusOfOrbit);
	this.vel = (name=="sun")?createVector(0,0):createVector(G*(orbitCenter.mass+mass)/radiusOfOrbit, 0);
	this.acc = createVector(0,0)
	
	for(let i=0; i<moons.length; i++){
		this.moons.push(new Planet(...moons[i], this))
	}

	this.show = function(){
		stroke(255)
		strokeWeight(20)
		point(map(this.pos.x, 0, 39.5*au, 0, 600), map(this.pos.y, 0, 39.5*au, 0, 600));
		for(let i=0;i<this.moons.length;i++){
			this.moons[i].show()
		}
	}
	
	this.update = function(){
		this.pos.add(this.vel);
		this.vel.add(this.acc);
		this.acc.mult(0)
		for(let i=0;i<this.moons.length;i++){
			this.moons[i].update()
		}
	}
	
	this.grav = function(){
		for(let i=0;i<this.moons.length;i++){
		
			gravForce(this, this.moons[i])
		}
		
	}
	
}

function gravForce(p1, p2){
	d = p1.pos.dist(p2.pos)
	
	diff1 = p1.pos.copy().sub(p2.pos)
	diff2 = p2.pos.copy().sub(p1.pos)
	
	f = G*p1.mass*p2.mass/(d*d)
	diff1.setMag(f)
	diff2.setMag(f)
	
}