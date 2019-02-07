let clock;

function setup(){
	var myCanvas = createCanvas(400, 400);
    myCanvas.parent("showClock");
	clock = new Clock();
}
function draw(){
	background(93, 63, 106)
	translate(width/2, height/2)

	clock.update();
	clock.show();
}

function Clock(){
	this.update = function(){
		this.hr = hour()%12+(minute()/60);
		this.mn = minute()+(second()/60);
		this.sc = second();
	}
	this.show = function(){
		for(let i=0; i<12; i++){
			line(175*sin(TWO_PI*i/12),175*cos(TWO_PI*i/12),200*sin(TWO_PI*i/12),200*cos(TWO_PI*i/12))
		}
		stroke(255,0,0);
		strokeWeight(1);
		line(0, 0,150*sin(TWO_PI*(this.sc/60)),-150*cos(TWO_PI*(this.sc/60)))
		strokeWeight(4);
		stroke(0);
		line(0, 0,150*sin(TWO_PI*(this.mn/60)),-150*cos(TWO_PI*(this.mn/60)))
		line(0, 0,75*sin(TWO_PI*(this.hr/12)),-75*cos(TWO_PI*(this.hr/12)))
	}
}