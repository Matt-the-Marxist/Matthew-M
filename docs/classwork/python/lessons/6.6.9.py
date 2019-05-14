def removeAllFromString(str, letter):
	result = ""
	for i in str:
		case = i.isupper()
		if i.lower() != letter.lower():
			if case:
				i.upper()
			result+=i
	return result

print(
	removeAllFromString(
		input("Enter a string to remove a specific letter from: "),
		input("What letter would you like to be removed? ")
	)
)