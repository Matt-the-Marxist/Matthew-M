#temp class; has a unit and a value
class temperature:
	def __init__(self, temp, unit):
		self.temp = temp
		self.unit = unit

#converts the temperature from one unit to the other
def tempConvert(temp, unit):
	if unit=="f":
		end = "C"
		return temperature(round((temp-32)/1.8, 2), end)
	elif unit=="c":
		end = "F"
		return temperature(round((1.8*temp),2)+32, end)
#gets a float value for the temp
while True:
	t = input("What is the temperature? ")
	try:
		float(t)
		break
	except:
		print(t+" is not a valid number. ")
#gets a value for the unit
while True:
	t=float(t)
	u = input("What is the unit(f/c)? ")
	#tries to convert the temp from one to the other
	try:
		initial=temperature(t, u)
		change = tempConvert(t, u)
		print(str(initial.temp)+initial.unit+" is "+str(change.temp)+change.unit)
		break
	except:
		print("Please enter a valid unit")