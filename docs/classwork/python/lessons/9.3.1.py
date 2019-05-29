class Rectangle:
	def __init__(self, length=0, width=0):
		self.length = length
		self.width = width
		
	def __repr__(self):
		return("a rectangle with "+str(self.__dict__))
	
	def getArea(self):
		return(self.length*self.width)
		
	def getPerimeter(self):
		return(2*(self.length+self.width))
r1 = Rectangle()
r2 = Rectangle(3,4)

print(r1)
print(r2)