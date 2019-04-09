#gets a random number and has the user guess until they get it

import random

magicNumber = random.random()*100 

while True:
	guess = float(input("guess a number 1-100: "))
	if round(guess,2) == round(magicNumber,2):
		break
	elif guess > magicNumber:
		print("Too high")
	else:
		print("Too low")
print("correct!")