// input: { red, green, blue }
// ouput: { light, neutral, dark }

const colors = [
    { green: .2, blue: .4 },
    { green: .4, blue: 0.6 },
    { red: 0.2, green: 0.8, blue: 0.8 },
    { green: 1, blue: 1 },
    { red: 0.8, green: 1, blue: 1 },
    { red: 1, green: 1, blue: 1 },
    { red: 1, green: 0.8, blue: 0.8 },
    { red: 1, green: 0.6, blue: 0.6 },
    { red: 1, green: 0.4, blue: 0.4 },
    { red: 1, green: .31, blue: 0.31 },
    { red: 0.8 },
    { red: 0.6, green: 0.2, blue: 0.2 }
];

const brightnesses = [
    { dark: 0.8 },
    { neutral: 0.8 },
    { light: 0.7 },
    { light: 0.8 },
    { light: 0.9 },
    { light: 1 },
    { light: 0.8 },
    { neutral: 0.7, light: 0.5 },
    { dark: 0.5, neutral: 0.5 },
    { dark: 0.6, neutral: 0.3 },
    { dark: 0.85 },
    { dark: 0.9 }
];

const trainingData = [];

for (let i = 0; i < colors.length; i++) {
    trainingData.push({
        input: colors[i],
        output: brightnesses[i]
    });
}

let net = new brain.NeuralNetwork({ hiddenLayers: [2,1] });

console.log(net.train(trainingData));

const json = JSON.stringify(net);


$.ajax({
    url:"https://api.myjson.com/bins/p6k5q",
    type:"PUT",
    data:'{"key_updated":"value_updated"}',
    contentType:"application/json; charset=utf-8",
    dataType:"json",
    success: function(data, textStatus, jqXHR){

    }
});     

     



console.log(json);
net = new brain.NeuralNetwork();

net = net.fromJSON(JSON.parse(json))
