class Food:
	
	edible = True
	category = ""
	calories = 0
	
	def __repr__(self):
		return "Category: "+self.category+", calories:"+str(self.calories)

class Vegetable(Food):
	category = "veggie"

class Broccoli(Vegetable):
	calories = 100
	edible = False

b = Broccoli()

print(b.edible)