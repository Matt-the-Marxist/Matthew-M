def replace_at_index(str, index, addStr):
	newStr = str[:index]+addStr+str[(index+1):]
	return newStr

s = replace_at_index(input("Enter a word or phrase:"), int(input("Enter an index value:")), input("Enter the new letter:"))

print(s)