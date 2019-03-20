#tells the user if they can get keys
key = 3
while(key!=True and key!=False):
	role = input("Are you an administrator, teacher, or student?:")
	if(role in ["teacher", "Teacher", "administrator", "Administrator"]):
		print("Administrators and teachers get keys!")
		key = True
	elif(role in ["student", "Student"]):
		print("Students do not get keys!")
		key = False
	else:
		print("You can only be an administrator, teacher, or student!")