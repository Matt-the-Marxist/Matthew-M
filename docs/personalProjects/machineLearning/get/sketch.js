let net = new brain.NeuralNetwork();

$.get("https://api.myjson.com/bins/p6k5q", function(data, textStatus, jqXHR) {

	net = net.fromJSON(data)
});

