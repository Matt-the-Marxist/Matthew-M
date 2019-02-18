function update(){
	let d = new Date();
	let n = d.getTime()/1000;
	//background color
	let bg;
	console.log(weather.sys.sunset-weather.sys.sunrise,n-weather.sys.sunrise)
	
	function bgColor(){
		let red;
		let green;
		let blue;
		if(n < weather.sys.sunrise || n > weather.sys.sunset){
			red = Math.round(map(weather.clouds.all,0,100,30,70)).toString(16);
			green = Math.round(map(weather.clouds.all,0,100,50,70)).toString(16);
			blue = Math.round(map(weather.clouds.all,0,100,70,70)).toString(16);
			$("#sun").css("background-image","url(../static/media/moon.png)")
			
		} else {
			red = Math.round(map(weather.clouds.all,0,100,70,170)).toString(16);
			green = Math.round(map(weather.clouds.all,0,100,190,170)).toString(16);
			blue = Math.round(map(weather.clouds.all,0,100,255,170)).toString(16);
			$("#sun").css("background-image","url(../static/media/sun.png)")
		}
		bg = "#"+red+green+blue;
		$("body").css("background-color","#"+red+green+blue);
	}
	function cloudCover(){
		let opacity = map(weather.clouds.all,0,100,0.25,1);
		console.log("cloud cover is:",opacity);
		$('#clouds').css({'opacity': opacity, "background-image":"url(../static/media/clouds.png)","box-shadow":"0 0 75px 75px "+bg+" inset"});
	}
	function windSpeed(){
		let speed = 1/map(weather.wind.speed,0,32,0,1);
		console.log("wind speed is:",speed);
		$("#clouds").css("animation","mymove infinite "+speed+"s");
	}
	
	bgColor();
	cloudCover();
	windSpeed()
	
}

function map(value, start1, end1, start2, end2){
	return start2+((end2-start2)*((value-start1)/(end1-start1)));
}