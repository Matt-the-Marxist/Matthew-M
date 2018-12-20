function Puck(){
	this.r = 5;
	this.x = width/2;
	this.y = height - (31 +  this.r);
	this.xspeed = 0;
	this.yspeed = 0;
	this.speed = speed/2;
	this.onPaddle = true;

	this.shoot = function(){
		this.angle =  random((3*PI)/4,PI/4);
		this.xspeed = this.speed * cos(this.angle);
		this.yspeed = this.speed * sin(this.angle);
		console.log(this.yspeed);
	}
	
	this.show = function(){
		fill(255);
		ellipse(this.x, this.y, 2*this.r, 2*this.r);
		
		this.x = this.x + this.xspeed;
		this.y = this.y + this.yspeed;
		
		if(this.x <= this.r||this.x >= width - this.r){
			this.xspeed *=-1;
		}
		
		if(this.y <= this.r){
			this.yspeed *= -1;
		}
		
		if(this.y >= height - this.r){
			this.xspeed = 0;
			this.yspeed = 0;
			this.y = height - (31 +  this.r);
			this.onPaddle = true;
			lives += -1;
		}
	}
	
	this.checkPaddle = function(){
		if( this.y >= height - (30+ this.r) && this.y<= height-(25-this.r) && this.x >= paddle.x && this.x <= paddle.x + paddle.width){
 			this.yspeed *= -1;
 			this.xspeed *= Math.pow(-1,floor(random()*2));
		}
	}
	this.checkBricks = function(){
		for(let i = 0; i<num; i++){
			if(this.y >= bricks[i].y -this.r && this.y <= bricks[i].y+bricks[i].width + this.r && this.x >=bricks[i].x && this.x <= bricks[i].x+bricks[i].width){
				this.yspeed *= -1;
				bricks[i].hits += -1;
				score += 1;
			}
			if(this.x >= bricks[i].x -this.r && this.x <= bricks[i].x+bricks[i].width + this.r && this.y >=bricks[i].y && this.y <= bricks[i].y+bricks[i].width){
				this.xspeed *= -1;
				bricks[i].hits += -1;
				score += 1;
			}
		}
	}
}