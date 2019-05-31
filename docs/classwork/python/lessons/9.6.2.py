class Food:
	
	
	category = ""
	calories = 0
	
	def __repr__(self):
		return "Category: "+self.category+", calories:"+str(self.calories)

class Vegetable(Food):
	category = "veggie"

class Broccoli(Vegetable):
	calories = 100

b = Broccoli()

foodList = [Food(), Vegetable(), Broccoli(), 5]

for i in foodList:
	if isinstance(i,Food):
		print(i)
	else:
		print(str(i)+" is not a food")