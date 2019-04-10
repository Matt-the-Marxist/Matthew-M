let earth;
let sun;
let G = 6.67408*Math.pow(10, -11);
let s1;
let s2;
let diff1;
let diff2;

function setup() {
	createCanvas(600, 600)
	earth = new Planet(1.496*pow(10, 11), 0, 1.496*pow(10, 11), -2580363, 5.972*pow(10,24));
	sun = new Planet(0, 0, 0, 0, 1.989*pow(10,30));
	background(0)
}

function draw() {
	background(0,100)
	translate(width/2, height/2);
	grav(sun, earth)
	earth.show()
	earth.update()
	sun.show()
	sun.update()
	s1 = s2;
	s2 = sun.pos.dist(earth.pos)
	diff1 = diff2
	diff2 = s1-s2
	console.log(Math.round((diff2-diff1)*100000)/100000)
}

function force(planet1, planet2){
	let dist = planet1.pos.dist(planet2.pos);
	let f = G*(planet1.mass*planet2.mass)/(dist*dist);
	return f;
}

function grav(planet1, planet2){
	let d1 = planet2.pos.copy().sub(planet1.pos).normalize();
	let d2 = planet1.pos.copy().sub(planet2.pos).normalize();
	
	let f = force(planet1, planet2);
	
	planet1.acc.add(d1.mult(f/planet1.mass))
	planet2.acc.add(d2.mult(f/planet2.mass))
}