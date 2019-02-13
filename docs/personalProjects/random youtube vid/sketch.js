function randYoutubeVid(){
	let base = "";
	let pullarr = ["1","2","3","4","5","6","7","8","9","0","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","-","_"];

	for(let i=0; i<11; i++){
		index = Math.floor(Math.random()*(pullarr.length));
		base = base + pullarr[index];
	}
	return base
}
function test(x){
	let apiCheck = "https://www.googleapis.com/youtube/v3/videos?part=snippet&key=AIzaSyC1XVF5CtsW7yv9K6wwgdCYMepINJBakMA&id=";
	let request = apiCheck + x;
	$.getJSON(request,gotData);

}
function gotData(data){
	console.log(data.pageInfo)
	if(data.pageInfo.totalResults > 0){
		console.log("nice")
	}
	else{
		test(randYoutubeVid());
	}
}

//api key:AIzaSyC1XVF5CtsW7yv9K6wwgdCYMepINJBakMA