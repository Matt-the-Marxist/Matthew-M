#gets a numerical numerator
while True:
	numerator = input("Please enter a number to be divided: ")
	
	try:
		numerator = int(numerator)
		break
	except:
		print("Please enter a valid number")

		
#gets a nonzero numerical denominator
while True:
	denominator = input("Please enter a number to divide by: ")
	
	try:
		denominator = int(denominator)
		try:
			dividend = numerator/denominator
			break
		except:
			print("Please enter a number other than 0")
	except:
		print("Please enter a valid number")
print(dividend)