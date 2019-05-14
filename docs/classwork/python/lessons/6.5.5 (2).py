def checkVowels(str):
	vowels = "aeiouAEIOU"
	for letter in vowels:
		if str.search(letter) >-1:
			return True

print(checkVowels(input("Enter a string: ")))