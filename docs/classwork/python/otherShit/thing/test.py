import random 
r = random

def logger(a, b, c):
	if(a+b+c)>225:
		print(a,b,c)
	else:
		logger(r.randint(0,150), r.randint(0,150),r.randint(0,150))

for i in range(r.randint(0,15)):
	logger(r.randint(0,150), r.randint(0,150),r.randint(0,150))