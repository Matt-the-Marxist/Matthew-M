#checks a user entered string for vowels
vowels = ["a","e","i","o","u"]

answer = input("Enter something: ")

if any(letter in answer for letter in vowels):
	print("Contains a vowel")
else:
	print("Doesn't contain a vowel")
	