import json

class Recipe:
    def __init__(self, name, outputNum, requirements):
        self.__dict__[name] = {}
        for i in requirements:
            self.__dict__[name][i[0]] = i[1]
        print(self.__dict__)
            
def getValidNum(reqStr):
    while True:
        try:
            end = int(input(reqStr))
            return end
        except:
            print("Please enter a valid Number")
        
a = Recipe("gold blocks", 1, [("gold ingots",9)])


with open("recipes.json","r") as f:
    recipes = json.load(f)
print(recipes)

while True:
    recipe = input("what recipe would you like to scale? ").lower()

    if recipe:
        try:
            end = recipes[recipe]
        except:
            if input("Recipe not found. would you like to add it?(y/n) ")=="y":
                parts = getValidNum("How many different parts in "+recipe+"? ")
                while True:
                    req = []
                    for i in range(parts):
                        name = input("part "+str(i+1)+": ").lower()
                        ammount = getValidNum("How many of "+name+"? ")
                        req.append((name, ammount))
                    total = 0
                    for i in req:
                        total+=i[1]
                    if(total<=9):
                        break
                    print("Too many pieces; try again.")
                output = getValidNum("How many of "+recipe+" does this recipe yield? ")
                recipes.update(Recipe(recipe, output, req).__dict__)
                end = recipes[recipe]
                with open("recipes.json", "w") as f:
                    json.dump(recipes, f, indent="\t")
    else:
        break