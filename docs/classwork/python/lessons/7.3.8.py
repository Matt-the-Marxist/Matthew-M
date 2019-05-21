#does a word ladder
def wordLadder(str, index, letter):
	i = int(index);
	if i < 0:
		return
	str = list(str)
	str[i] = letter
	str = "".join(str)
	print(str)
	wordLadder(str, input("What index? "), input("What letter? "))
	
word = input("What is the word to ladder? ")

wordLadder(word, input("What index? "), input("What letter? "))
