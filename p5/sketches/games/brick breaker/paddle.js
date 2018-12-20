function Paddle(){
	this.x = width/2 -50;
	this.speed = 0;
	this.width = 100
	
	this.show = function(){
		fill(255);
		rect(this.x, height-30 , this.width, 5);
		this.x = this.x + this.speed;
		
		if(this.x <= 0||this.x >= width - this.width){
			this.speed = 0;
		}
		
		if(puck.onPaddle){
			puck.x = this.x + 50;
		}
	}
	
	this.move = function(dir){
		this.speed = dir;
	}
}
