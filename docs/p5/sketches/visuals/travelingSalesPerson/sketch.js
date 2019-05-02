let cities = []

function setup() {
	createCanvas(400, 400)
	for(let i=0; i<10; i++){
		cities[i] = new City()
	}
}

function draw() {
	background(0)
	
}

function City (){
	this.pos = createVector(random(width),random(height));
	
	this.show = function(){
		point(this.pos.x, this)
	}
}