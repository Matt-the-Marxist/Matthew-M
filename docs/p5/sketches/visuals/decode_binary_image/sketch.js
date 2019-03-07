let bg;
let runOnce = 0;

function setup() {
	bg = loadImage('beeMovieScript.png')
	createCanvas(704,849);
}

function draw() {
	if(runOnce==2){
		noLoop()
	}
	background(bg);
	loadPixels();
	BinToText(read());
	runOnce++;
}

function read(){
	let end = "";
	for(let i=0; i<pixels.length; i+=4){
		end = end + map(pixels[i],0,255,0,1);
	}
	return end;
}
function BinToText(str) {
	var parts = str.match(/[\s\S]{1,8}/g) || [];
    for(let i=0; i<parts.length; i++){
		parts[i]=String.fromCharCode(parseInt(parseInt(parts[i],2).toString(10)));
	}
	whole = parts.join("").replace(/[^\x20-\x7E]/g, '');
	if(isBase64(whole)){
		console.log(atob(whole));
	}else{
		console.log(whole);
	}
}
function mouseClicked() {
	draw();
}

function isBase64(str) {
    if (str ==='' || str.trim() ===''){ return false; }
    try {
        return btoa(atob(str)) == str;
    } catch (err) {
        return false;
    }
}