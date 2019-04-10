
def tempConvert(temp, unit, end):
	if unit=="f":
		end = "C"
		return((1.8*temp)+32)
	elif unit=="c":
		end = "F"
		return((temp-32)/1.8)
	else:
		print("Please enter a valid unit")

while True:
	t = input("What is the temperature? ")
	try:
		float(t)
		break
	except:
		print(t+" is not a valid number. ")

while True:
	t=float(t)
	u = input("What is the unit(f/c)? ")
	a = ""
	change = tempConvert(t, u, a)
	if type(change) is float:
		print(str(t)+u+" is "+str(change)+a)
		break
	
	