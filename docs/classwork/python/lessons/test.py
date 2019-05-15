num = 1
#1
print("\n",num)
try:
	name = "Tim"
	name_list = list(name)
	for index in enumerate(name_list):
		print("Letter " + str(index) + ": " + name_list[index])
except:
	pass
num +=1

#2
print("\n",num)
try:
	name = "Tim"
	name_list = list(name)
	for index, value in enumerate(name_list):
		print(name_list[index] + str(index))
except:
	pass
num +=1
#3
print("\n",num)
try:
	name = "Tim"
	name_list = list(name)
	for index, value in enumerate(name_list):
		print("Letter " + str(index+1) + ": " + name_list[index])
except:
	pass
num +=1
#4
print("\n",num)
try:
	name = "Tim"
	name_list = list(name)
	for index, value in (name_list):
		print("Letter " + str(index+1) + ": " + name_list[index])
except:
	pass
num +=1
