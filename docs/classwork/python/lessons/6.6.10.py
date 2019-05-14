def removeAllFromString(str, remove):
	import re
	return re.sub(remove, "", str, flags=re.IGNORECASE)

print(
	removeAllFromString(
		input("Enter a string to remove a specific letter from: "),
		input("What string would you like to be removed? ")
	)
)