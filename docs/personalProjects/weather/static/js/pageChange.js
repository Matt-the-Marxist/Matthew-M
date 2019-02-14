function update(){
	function bgColor(){
		let red = Math.round(map(weather.clouds.all,0,100,70,170)).toString(16);
		let green = Math.round(map(weather.clouds.all,0,100,190,170)).toString(16);
		let blue = Math.round(map(weather.clouds.all,0,100,255,170)).toString(16);
		$("body").css("background-color","#"+red+green+blue);
	}
	bgColor();
}

function map(value, start1, end1, start2, end2){
	return start2+((end2-start2)*((value-start1)/(end1-start1)));
}