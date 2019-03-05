import random
import turtle
t = turtle
r = random
"""
creates a random number
asks user for a number 
if they're equal,
escape the loop
if not, guess again
"""
secretNumber = r.randint(1,10)
userNumber = 0
noTimesThrough = 0
while userNumber !=secretNumber:
	if noTimesThrough !=0:
		if userNumber < secretNumber:
			print("↑")
		else:
			print("↓")
	print("guess a number 1-10")
	userNumber = int(input())
	

	noTimesThrough+=1

print("it took "+str(noTimesThrough)+" times")