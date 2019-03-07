let n=0;
let a=10;
function setup() {
	createCanvas(windowWidth,windowHeight);
	pixelDensity(1);
	frameRate(60);
}

function draw() {
	a=width/frameRate();
	loadPixels();
	for(let x=0; x<width; x++){
		for(let y=0; y<height; y++){
			let pix = (x+y*width)*4;
			pixels[pix + 0] = map(x,0,width,0,255);
			pixels[pix + 1] = map(dist((1.5*width-(n%(2*width))),(sin(map((n%(width)),0,width,0,TWO_PI))+1)*height/2,x,y),0,216,255,0);
			pixels[pix + 2] = map(y,0,height,0,255);
			pixels[pix + 3] = 255;
		}
	}
	updatePixels();
	n+=a;
}