let weather;
//gets location
function ipLookUp () {
	$.ajax('http://ip-api.com/json/')
	.then(
		function success(response) {
			let lat = response.lat.toString();
			let lon = response.lon.toString();
			getWeather(lat, lon);
		},
		function fail(data, status) {
			console.log('Request failed.  Returned status of',
						status);
		}
	);
}
//gets current weather
function getWeather(lat,lon) {
	let base1 = "https://api.openweathermap.org/data/2.5/weather?appid=9a741b3c87d18b0b"
	let base2 = "fa2deba6b43d62c8&lat="
	let base3 = "&lon="
	let whole = base1+base2+lat+base3+lon;
	$.ajax(whole)
	.then(
		function success(response) {
			weather = response;
			update();
		},

		function fail(data, status) {
			console.log('Request failed.  Returned status of',
						status);
		}
	);
}

ipLookUp();
