def replace_at_index(str, index):
	newStr = str[:index]+'-'+str[(index+1):]
	return newStr

s = replace_at_index("eggplant", 3)

print(s)