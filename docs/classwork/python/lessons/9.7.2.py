class TripleAndHalf:
	__num = 1
	
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
	

def GetSeven(num, length):
	method = ""
	while True:
		if num.getNum()==7:
			return method
		if num.getNum()>7:

n = TripleAndHalf()
for i in range(100):
	print("method: ", GetSeven(n, i))
	n.resetNum()