function setup() {
	createCanvas(100,100);
	
}

function draw() {
	background(100)
	loadPixels();
	for(let i=0;i<pixels.length;i++){
		if(i%4!=3){
			pixels[i]=random(255);
			console.log(pixels[i]);
		}
		else{
			pixels[i]=255;
		}
	}
	updatePixels();
	noLoop();
}