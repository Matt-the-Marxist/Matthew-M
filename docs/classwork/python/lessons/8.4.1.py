def clear():
	import os
	os.system('cls')

phonebook = {}

while True:
	print("Please enter a name.\nIf you would like to exit, just hit enter.")
	search = input("Name: ")
	
	if not search:
		break
	
	try:
		print(phonebook[search])
		input()
	except:
		while True:
			print("(###)-###-####")
			number = input("Number: ")
			
			finNum = ""
			for i in number:
				try:
					finNum+=str(int(i))
				except:
					pass
				
			if len(finNum) == 10:
				phonebook[search] = finNum
				break
			else:
				print("Invalid Number")
			clear()
	clear()

print(phonebook)