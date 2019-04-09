
class ShoeType:
	def __init__(self, weather, shoe):
		self.weather = weather
		self.shoe = shoe

def check(str):
	if str=="sunny":
		return ShoeType(str, "sneaker")
	elif str=="rainy":
		return ShoeType(str, "galoshes")
	elif str=="snowy":
		return ShoeType(str, "winter boots")
	else:
		print("That's not one of the options!")
		return False

while True:
	weather = check(input("what is the weather? (sunny, rainy, snowy): "))
	if weather != False:
		break
print("On a "+weather.weather+" day, "+weather.shoe+" are appropriate footwear")
