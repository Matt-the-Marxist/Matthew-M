let hw;
let input, button;
let binaryOut;

function setup() {
	createCanvas(140,140);
	input=createInput();
	pixelDensity(1);
	
	button = createButton("get image");
	button.mousePressed(txtTo64ToBin)

	loadPixels();
}

function txtTo64ToBin(){
	str = input.value();
	str = btoa(str);
	let output = '';
	str = str.split("")
	for(let i=0;i<str.length;i++){
		let base = str[i].charCodeAt(0).toString(2) 
		while(base.length < 8){
			base = "0"+base;
		}
		output += base;
	}
	binaryOut = output;
	console.log(binaryOut)
	updateImage(binaryOut.split(''))
}

function updateImage(binArr){
	hw = factors(binArr.length);
	hw = hw[hw.length-1];
	console.log(hw);
	resizeCanvas(...hw,false);
	for(let i=0; i<binArr.length; i++){
		pixels[i*4] = map(binArr[i],0,1,0,255);
		pixels[i*4+1] = map(binArr[i],0,1,0,255);
		pixels[i*4+2] = map(binArr[i],0,1,0,255);
		pixels[i*4+3] = 255;
	}
	console.log(pixels)
	redraw();
	updatePixels();
}

function factors(num) {

    var half = Math.floor(num / 2),
        arr = [],
        i, j;


    num % 2 === 0 ? (i = 2, j = 1) : (i = 3, j = 2);

    for (i; i <= half; i += j) {
        if(num % i === 0 && i <= num/i){
			arr.push([i,num/i]);
		}
    }
    return arr;
}

