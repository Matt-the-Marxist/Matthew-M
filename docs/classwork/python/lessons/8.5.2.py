import pprint, string

def updateCounts(countDict, word):
	try:
		words[word]+=1
	except:
		words[word] = 1

entered = input("Enter a string: ")

words = {}

for i in entered.split():
	i = i.translate(str.maketrans('', '', string.punctuation)).lower()
	updateCounts(words, i)
sortWords = []
for key in words:
	sortWords.append((key,words[key]))
sortWords.sort(key=lambda elem: elem[1])
sortWords.reverse()
pprint.pprint(sortWords)