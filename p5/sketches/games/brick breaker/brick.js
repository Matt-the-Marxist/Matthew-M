function Brick (index){
	this.width = 16;
	this.gap = 1;
	this.columns = Math.floor(width / (this.width + this.gap));
	this.x = 1+(this.width+this.gap)*Math.floor(index%this.columns);
	this.y = 1+Math.floor(index/this.columns)*(this.width+this.gap);
	this.hits = floor(map(this.y,0,51,3,10));
	
	this.show = function(){
		this.color = map(this.hits, 1, 7, 0, 255);
		fill(this.color,0,255);
		rect(this.x, this.y, this.width, this.width);
		if(this.hits <= 0){
			this.x = 0;
			this.y = 0;
			this.width = 0;
			this.gap  = 0;
		}
	}
	
}