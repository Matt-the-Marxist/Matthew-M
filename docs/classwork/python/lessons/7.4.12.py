# prints author names in order of last name

import pprint
def getNames():
	while True:
		try:
			num = int(input("How many names does the author have? "))
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
	return person

def fiveAuthors():
	authors = []
	for i in range(5):
		authors.append(getNames())
			
	authors = sorted(authors, key=lambda k: k["Last Name"])
	pprint.pprint(authors)

fiveAuthors()