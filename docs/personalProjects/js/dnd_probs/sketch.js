let sampleSpace = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
for(let i=1; i<=6;i++){
	for(let j=1; j<=6;j++){
		for(let k=1; k<=6;k++){
			for(let l=1; l<=6;l++){
				console.log("hi")
				let total = i+j+k+l-Math.min(i,j,k,l);
				sampleSpace[total] += 1;
			}
		}
	}
}

console.log(sampleSpace);
//mean = 12.24459877
//sd = 2.846844445