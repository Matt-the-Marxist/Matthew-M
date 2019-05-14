#gets name of user
name = input("Please enter your name: ").lower()
vowels = "aeiou"
#checks for vowels
for i in vowels:
	if name.find(i)>-1:
		print("there is an "+i+" in your name; the first is letter #"+str(name.find(i)+1))