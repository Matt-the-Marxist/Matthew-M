function pentrimino(){
	this.x = width/2;
	this.y = 0;
	this.ySpeed = 2*difficulty + 1;
	this.rot = 0;
	
	this.update = function() {
		this.y = this.y + this.ySpeed
		if (this.y >= height){
			this.y = 0;
		}
	}
	this.pos = function(x, y, z){
		this.x = this.x+15*x;
		this.y = this.y+15*y;
		this.rot = this.rot+z;
	}
	this.show = function(){
		fill(255);
		rect(this.x, this.y, 15, 15);
	}
}