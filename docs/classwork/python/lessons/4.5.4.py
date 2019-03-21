# Amount of food and number of people
tons_of_food = float(input("How many tons of food are available?"))
num_people = int(float(input("How many people are there?")))

# Determine how much food each person gets
tons_of_food_per_person = tons_of_food / num_people
print(tons_of_food_per_person)

# Ask the user how much food they took
tons_taken = float(input("How many tons of food did you take? "))
#checks to 4 places
if round(tons_taken,4) == round(tons_of_food_per_person,4):
	print("Good job, you took the right amount of food!")
else:
	print("You took the wrong amount of food!")