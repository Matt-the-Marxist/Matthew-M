#returns a safe Int
def safeInt(x):
	try:
		return int(x)
	except:
		return 0
		
list_of_strings = ["a", "2", "7", "zebra"]

print([safeInt(x) for x in list_of_strings])