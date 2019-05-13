function setup() {
	
}

function draw() {
	
}

function rgb2ryb(r,g,b){
	r/=255;
	g/=255;
	b/=255;
	
	//console.log(r, g, b)
	
	let i = min(r, g, b)
	rt = r-i;
	gt = g-i;
	bt = b-i;
	let ryb = {
		"r": r-min(rt, gt),
		"y": (g-min(rt, gt))/2,
		"b": (b+g-min(rt, gt))/2,
	}
	let n = max(ryb.r, ryb.y, ryb.b)/max(r, g, b)
	
	console.log(max(ryb.r, ryb.y, ryb.b)/max(r,g,b))
	if(n>0){
		ryb.r /= n;
		ryb.y /= n;
		ryb.b /= n;
	}
	
	i = min(1-r,1-g,1-b)
	ryb.r += i;
	ryb.y += i;
	ryb.b += i;
	
	console.log(ryb)
	
	ryb.r *= 255;
	ryb.y *= 255;
	ryb.b *= 255;
	
	return ryb;
}