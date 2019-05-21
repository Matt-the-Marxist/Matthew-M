#gives the first, last and middle names of the user
import pprint
def getNames():
	while True:
		try:
			num = int(input("How many names do you have? "))
			break
		except:
			print("Invalid Number")
	names = []
	for i in range(num):
		names.append(input("Name #"+str(i+1)+": "))
	person = {}
	person["First Name"] = names[0]
	person["Middle Name(s)"] = names[1:(len(names)-1)]
	person["Last Name"] = names[len(names)-1]
	pprint.pprint(person)

getNames()