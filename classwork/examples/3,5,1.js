function noOne(){
	let yourArray = ["a",1,true,"b",2,false];
		console.log(yourArray);
}
noOne();
function noTwo(){
	function mixedNumbers(arr) {
		// change code below this line
		arr.unshift('I', 2, 'three');
		arr.push(7, 'VIII', 9);
		// change code above this line
		return arr;
	}

	// do not change code below this line 
	console.log(mixedNumbers(['IV', 5, 'six']));
}
noTwo();
function noThree(){
	function sumOfTen(arr) {
		// change code below this line
		let sum = 0;
		for(let i=0; i < arr.length; i++){
			sum = sum + arr[i];
		};
		let diff = 10-sum;
		arr.splice(arr.length+1,0,diff);
		// change code above this line
		return arr.reduce((a, b) => a + b);
	}

	// do not change code below this line
	console.log(sumOfTen([2, 5, 1, 5, 2, 1]));
}
noThree();
function noFour(){
	function forecast(arr) {
		// change code below this line
		for(let i=arr.length; i>=0; i--){
			if(arr[i]!="warm" && arr[i]!="sunny"){
				arr.splice(i,1);
			}
		}
		return arr;
	}

	// do not change code below this line
	console.log(forecast(['cold', 'rainy', 'warm', 'sunny', 'cool', 'thunderstorms']));
}
noFour();
function noFive(){
	function spreadOut() {
		let fragment = ['to', 'code',];
		let sentence = ['learning',...fragment, 'is','fun'];
		return sentence;
	}

	// do not change code below this line
	console.log(spreadOut());

}
noFive();
