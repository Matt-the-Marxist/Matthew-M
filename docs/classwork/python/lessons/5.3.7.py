#gets a random number and has the user guess until they get it

import random

magicNumber = random.randint(1,100) 

while True:
	guess = int(input("guess a number 1-100: "))
	if guess == magicNumber:
		break
	elif guess > magicNumber:
		print("Too high")
	else:
		print("Too low")
print("correct!")