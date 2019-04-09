#prints the average of the scores entered

scores = []
noTests = int(float(input("How many tests? :")))
for i in range(noTests):
	scores.append(float(input("what was the score? :")))

sum = float(0)
for i in range(len(scores)):
	sum +=scores[i]

print(sum/float(len(scores)))