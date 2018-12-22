let number = prompt("enter a number", 0)
let end = '';

function roman(string,num){
	while(num > 0){
		if(num >=1000){
			while(num >=1000){
				string = string + "M";
				num = num-1000;
			}
		}
		if(num >=900){
			while(num >=900){
				string = string + "CM";
				num = num-900;
			}
		}
		if(num >=500){
			while(num >=500){
				string = string + "D";
				num = num-500;
			}
		}
		if(num >=400){
			while(num >=400){
				string = string + "CD";
				num = num-400;
			}
		}
		if(num >=100){
			while(num >=100){
				string = string + "C";
				num = num-100;
			}
		}
		if(num >=90){
			while(num >=90){
				string = string + "XC";
				num = num-90;
			}
		}
		if(num >=50){
			while(num >=50){
				string = string + "L";
				num = num-50;
			}
		}
		if(num >=40){
			while(num >=40){
				string = string + "M";
				num = num-40;
			}
		}
		if(num >=10){
			while(num >=10){
				string = string + "X";
				num = num-10;
			}
		}
		if(num >=9){
			while(num >=9){
				string = string + "IX";
				num = num-9;
			}
		}
		if(num >=5){
			while(num >=5){
				string = string + "V";
				num = num-5;
			}
		}
		if(num >=4){
			while(num >=4){
				string = string + "IV";
				num = num-4;
			}
		}
		if(num >=1){
			while(num >=1){
				string = string + "I";
				num = num-1;
			}
		}
	}
	return string;
}
document.write(`${number} is ${roman(end , number)} in roman numerals`);