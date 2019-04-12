def retrievePositiveNumber():
	while True:
		num = input("Please enter a positive number: ")
		
		try:
			num = float(num)
			
			try:
				num = num**.5
				print(num)
			except:
				print("Please Enter a positive number")
			
		except:
			print(num+" is not a number")

retrievePositiveNumber()