class Rectangle:
	numRects = 0

	def __init__(self, length=0, width=0, color="black"):
		self.length = length
		self.width = width
		self.color = color
		Rectangle.numRects += 1
		
	def __repr__(self):
		return("a rectangle with "+str(self.__dict__)+" which is "+self.color+".")
	
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
r1 = Rectangle(3,4,"green")
r2 = Rectangle(2,3, "red")
r3 = r1-r2
print(r3,"There are", r3.numRects, "rectangles")