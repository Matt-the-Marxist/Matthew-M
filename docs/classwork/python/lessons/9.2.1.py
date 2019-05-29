class Rectangle:
	def __init__(self, length=0, width=0):
		self.length = length
		self.width = width
	def getArea(self):
		return(self.length*self.width)
r1 = Rectangle()
r2 = Rectangle(3,4)

print("Area:",r1.getArea(),"|Perimeter:",r1.getPerimeter())
print("Area:",r2.getArea(),"|Perimeter:",r2.getPerimeter())