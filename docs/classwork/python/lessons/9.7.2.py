class TripleAndHalf:
	__num = 1
	
	def __repr__(self):
		return str(self.__num)
	def triple(self):
		self.__num*=3
		return self
	
	def halve(self):
		self.__num=int(self.__num/2)
		return self
	
	def getNum(self):
		return self.__num
		
	def resetNum(self):
		self.__num = 1
	

def GetSeven(num, record):
	method = ""
	import random
	while True:
		if len(method) > record:
			return ""
		x = random.random()
		x = x>.1
		if num.getNum()==7:
			return method
			break
			
		elif x:
			if num.getNum()>7:
				num.halve()
				method+="h"
			else:
				num.triple()
				method+="t"
			
		else:
			if num.getNum()<7:
				num.halve()
				method+="h"
			else:
				num.triple()
				method+="t"
n = TripleAndHalf()
record = float("inf")
while True:

	x = GetSeven(n, record)
	if len(x)<=record and x!="":
		record = len(x)
		print(x)
	n.resetNum()