let lat;
let lon;

function ipLookUp () {
	$.ajax('http://ip-api.com/json/')
	.then(
		function success(response) {
			lat = response.lat;
			lon = response.lon;
			lat = Math.round(lat).toString();
			lon = Math.round(lon).toString();
			console.log(lat, lon)
			return(lat, lon);

		},

		function fail(data, status) {
			console.log('Request failed.  Returned status of',
						status);
		}
	);
}

function getWeather () {
	let i;
	while(typeof(lon)=="undefined"){
		
	}
		console.log(typeof(lat),typeof(lon));
		let base1 = "https://api.openweathermap.org/data/2.5/appid=9a741b3c87d18b0bfa2deba6b43d62c8&weather?lat="
		let base2 = "&lon="
		let whole = base1+lat+base2+lon;
		console.log(whole)
		$.ajax(whole)
		.then(
			function success(response) {
				console.log(response);
			},

			function fail(data, status) {
				console.log('dumbass',
							status);
			}
		);
}

getWeather(ipLookUp());