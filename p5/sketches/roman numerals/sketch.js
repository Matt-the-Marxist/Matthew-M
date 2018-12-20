let number = prompt("enter a number", 0)
let end;

function roman(arr,num){
	if(num != 0){
		if(num >=1000){
			while(num >=1000){
				arr.push("M");
				num-1000;
			}
		}
		if(num >=900){
			while(num >=1000){
				arr.push("CM");
				num-900;
			}
		}
		if(num >=500){
			arr.push("D");
			num-500;
		}
		if(num >=400){
			arr.push("CD");
			num-400;
		}
		if(num >=100){
			arr.push("C");
			num-100;
		}
		if(num >=90){
			arr.push("XC");
			num-90;
		}
		if(num >=50){
			arr.push("L");
			num-50;
		}
		if(num >=40){
			arr.push("M");
			num-40;
		}
		if(num >=10){
			arr.push("X");
			num-10;
		}
		if(num >=9){
			arr.push("IX");
			num-9;
		}
		if(num >=5){
			arr.push("V");
			num-5;
		}
		if(num >=4){
			arr.push("IV");
			num-4;
		}
		if(num >=1){
			arr.push("I");
			num-1;
		}
	}
	return arr;
}
console.log(roman(end , number));