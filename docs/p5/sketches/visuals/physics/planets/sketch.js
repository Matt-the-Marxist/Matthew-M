let G = 6.67408*Math.pow(10,-11)
let au = 1.496*Math.pow(10,8)

let sun
let planets

function setup() {
	//Planet [name, mass, radiusOfOrbit, moons, orbitCenter]
	luna = ["luna", 7.348*pow(10,22),385000,[]]
	planets = [
		["neptune",1.024*pow(10,26), 30.06*au,[]]//neptune
	]
	createCanvas(1200, 1200)
	sun = new Planet("sun", 1.9891*pow(10,30), 0, planets, {mass:0,pos:{y:0}});
}

function draw() {
	translate(sun.pos.x+(width/2), sun.pos.y+(height/2));
	background(0);
	sun.show();
	sun.update();
	sun.grav();
	noLoop();
}
