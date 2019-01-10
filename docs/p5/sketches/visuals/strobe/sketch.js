let color = 0;
function setup() {
	createCanvas(2000,1000);
}

function draw() {
	background(color)
	switch(color){
		case 0:
			color = 255;
			break;
		case 255:
			color = 0;
	}
}