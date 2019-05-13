let rs,gs,bs

function setup() {
	createCanvas(windowWidth, windowHeight)
	
	rs = createSlider(0, 255, 100);
	rs.position(0, 25);
	
	gs = createSlider(0, 255, 0);
	gs.position(0, 50);
	
	bs = createSlider(0, 255, 255);
	bs.position(0, 75);
}

function draw() {
	let r = rs.value()
	let g = gs.value()
	let b = bs.value()
	
	background(r, g, b)
	
	stroke(0)
	text("Red", rs.x*2+rs.width, rs.y+rs.height/2)
	text("Green", gs.x*2+gs.width, gs.y+gs.height/2)
	text("Blue", gs.x*2+bs.width, bs.y+bs.height/2)
}

