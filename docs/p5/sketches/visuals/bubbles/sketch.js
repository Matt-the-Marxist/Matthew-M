let bubbles = [];

function setup() {
	createCanvas(400,400);
	bubbles.push(new Bubble);
}

function draw() {
	background(255,225,230)
	
	for(let i=0; i<bubbles.length;i++){
		bubbles[i].show();
	}
	if(checkwalls() || checkOtherBubbles()){
		bubbles.push(new Bubble);
	}
	bubbles[bubbles.length-1].grow();
	
	
}

function checkwalls(){
	if(bubbles[bubbles.length-1].x+(bubbles[bubbles.length-1].r/2)>=width){
		return true;
	}
	else if(bubbles[bubbles.length-1].x-(bubbles[bubbles.length-1].r/2)<=0){
		return true;
	}
	else if(bubbles[bubbles.length-1].y+(bubbles[bubbles.length-1].r/2)>=height){
		return true;
	}
	else if(bubbles[bubbles.length-1].y-(bubbles[bubbles.length-1].r/2)<=0){
		return true;
	}
	else{
		return false;
	}
	
}

function checkOtherBubbles(){
	for(let i=0; i<bubbles.length;i++){
		if(i!=bubbles.length-1){
			if(dist(bubbles[i].x, bubbles[i].y, bubbles[bubbles.length-1].x, bubbles[bubbles.length-1].y)>=((bubbles[bubbles.length-1].r+bubbles[i].r)/2)){
				return true;
			}
		}
	}
}

function Bubble(){
	this.x = random(width);
	this.y = random(height);
	this.r = 0;
	
	
	this.grow = function(){
		this.r++
	}
	
	this.show = function(){
		noFill()
		stroke(201,55,86);
		strokeWeight(3)
		ellipse(this.x,this.y,this.r,this.r)
	}
}