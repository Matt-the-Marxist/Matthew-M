from random import *
#percents = []
#for l in range(30):
#	positive = 0
for k in range(100):
	earned = []
	start = 1000
	for j in range(10):
		total = start
		for i in range(1000):
			total +=6
			d1 = randint(1,8)
			d2 = randint(1,8)
			if d1==d2:
				total-= d1*10
			if total <= 0:
				break
		earned.append(total-start)
	µ=sum(earned)/len(earned)
	σ=((1/len(earned))*sum([(x-µ)**2 for x in earned]))**.5
	marginErr = 2.262157163*(σ/(len(earned)**.5))
	lower = '{0:.5f}'.format(round(µ-marginErr,5))
	upper = '{0:.5f}'.format(round(µ+marginErr,5))
	print((lower, upper))
#		if µ-marginErr<=375<=µ+marginErr:
#			positive+=1
#	percents.append(positive/100)
#	print(positive/100)
#print(sum(percents)/len(percents))