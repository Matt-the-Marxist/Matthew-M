# counts owls and tells where they are
import re

def countOwls(Str):
	numMatch = 0
	for m in re.finditer("owl", Str, flags = re.IGNORECASE):
		print("Match found at index "+str(m.start()))
		numMatch+=1
	print("There are "+str(numMatch)+" matches")
	

countOwls(input("Enter some text: "))