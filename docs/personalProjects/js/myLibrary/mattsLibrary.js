function sort(arr){	
	for(let i = 0; i < arr.length; i++){
		for(let j = 0; j < arr.length - i; j++){
			if (s[j] > s[j +1]){
				let store = s[j];
				s[j] = s[j+1];
				s[j+1] = store;
			}
		}
	}
}
function map(value, start1, end1, start2, end2){
	return start2+((end2-start2)*((value-start1)/(end1-start1)));
}
