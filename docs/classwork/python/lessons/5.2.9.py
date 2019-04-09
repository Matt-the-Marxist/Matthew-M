#prints a full name

names = []
noNames = int(float(input("How many names? :")))
for i in range(noNames):
	names.append(input("what is the name? :"))

name = ""
for i in range(len(names)):
	name +=names[i]+" "

print(name)