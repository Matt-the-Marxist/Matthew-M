class Rectangle:
	def __init__(self, length=0, width=0):
		self.length = length
		self.width = width
		
	def __repr__(self):
		return("a rectangle with "+str(self.__dict__))
	
	def __eq__(self, other):
		return self.__dict__==other.__dict__
	
	def __add__(self, other):
		return Rectangle(self.length+other.length, self.width+other.width)
	
	def __sub__(self, other):
		return Rectangle(self.length-other.length, self.width-other.width)
	
	def getArea(self):
		return(self.length*self.width)
		
	def getPerimeter(self):
		return(2*(self.length+self.width))
r1 = Rectangle(3,4)
r2 = Rectangle(2,3)
r3 = r1-r2

print(r3)