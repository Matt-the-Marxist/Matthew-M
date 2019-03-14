#makes an object of each ingredient
#each ingredient has a name and an amount
#each object gets added to an array
class Ingredient:
	def __init__(self, name, amount):
		self.name = name
		self.amount = amount

salad = []

noIngredients = int(input("how many ingredients? "))

for i in range(noIngredients):
	n = input("Whats the ingredient called? ")
	a = float(input("How many ounces for one serving? "))
	salad.append(Ingredient(n,a))

servings = input("How many servings? ")
print("")
for i in range(len(salad)):
	print(salad[i].name+": "+str(salad[i].amount*float(servings))+"oz")