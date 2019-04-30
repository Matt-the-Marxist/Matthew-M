def retrievePositiveNumber():
	while True:
		num = input("Please enter a positive number: ")
		
		#gets a number
		try:
			num = float(num)
			
			#gets a positive number
			if(num>0):
				return num
			else:
				print(str(num)+" is not a positive number")
			
		except:
			print(num+" is not a number")

n = retrievePositiveNumber()

print(n)