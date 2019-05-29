class Rectangle:
	def __init__(self, length=0, width=0):
		self.length = length
		self.width = width

r1 = Rectangle()
r2 = Rectangle(3,4)

print((r1.length,r1.width),(r2.length,r2.width))