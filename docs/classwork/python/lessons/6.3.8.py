def calculate_area(s):
	if s==0:
		s=10.0
	print("The area of a square with sides of length "+str(s)+" is "+str(s*s))


while True:
	side = input("Please enter a number: ")
	
	try:
		side = float(side)
		break
	except:
		print(side+" is not a valid number.")
calculate_area(side)
