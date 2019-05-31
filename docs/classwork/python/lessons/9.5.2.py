class Car:
	num_cars_made = 0
	doors = 4
	
	def __init__(self):
		# Change num_doors to a class variable!
		self.num_wheels = 4
		self.color = "boring gray"
		Car.num_cars_made += 1


c1 = Car()
c2 = Car()
print(c1.doors)

c1.doors = 10

print(c1.doors)
print(c2.doors)
print(Car.doors)