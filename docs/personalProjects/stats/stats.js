function normPDF(x, mu, sigma){
	return 1/Math.sqrt(2*Math.PI*sigma*sigma)*Math.pow(Math.E,-((x-mu)*(x-mu))/(2*sigma*sigma))
}

function normCDF(lower, upper, mu, sigma){
	t1 = new Date().getTime()
	let a=0 
	let step=0.000001
	for(let i=lower; i<upper; i+=step){
		a+= step*normPDF(i, mu, sigma);
	}
	t2 = new Date().getTime()
	console.log((t2-t1)/1000, " seconds")
	return a;
}

function erf(x) {
 
}

function invNorm(Area, mu, sigma){
	
}

function tPDF(x, degreesFreedom){
	
}

function tCDF(lower, upper, degreesFreedom){
	
}

function invT(Area, degreesFreedom){
	
}