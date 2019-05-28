import pprint, string

entered = input("Enter a string: ")

words = {}

for i in entered.split():
	i = i.translate(str.maketrans('', '', string.punctuation)).lower()
	try:
		words[i]+=1
	except:
		words[i] = 1
sortWords = []
for key in words:
	sortWords.append((key,words[key]))
sortWords.sort(key=lambda elem: elem[1])
sortWords.reverse()
pprint.pprint(sortWords)