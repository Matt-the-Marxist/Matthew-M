from math import erf, e, pi, inf, gamma
import pyerf
import pybeta

def normPDF(x, mu=0, sigma=1):
	return (1/(2*pi*(sigma**2))**.5)*(e**(-((x-mu)**2)/2*(sigma**2)))

def normCDF(low, high, mu=0, sigma=1):
	return ((1+erf((high-mu)/(sigma*2**.5)))*.5)-((1+erf((low-mu)/(sigma*2**.5)))*.5)

def invNorm(x, mu=0, sigma=1):
	return mu+sigma*((2**.5)*pyerf.erfinv(2*x-1))

def tPDF(x, df=1):
	return (gamma((df+1)/2)/((df*pi)**.5*gamma(df/2)))*((1+((x**2)/df))**(-(df+1)/2))

def tCDF(low, high, df=1):
	.5+high*gamma((df+1)/2)*(hypgeo()/((pi*df)**.5*gamma(df/2)))
	
print(tCDF())