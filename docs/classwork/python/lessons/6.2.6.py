inp  = input("Give a string: ")

#returns the first character of a string
def first_character(str):
	return(str[:1])

#returns the last character of a string
def all_but_first_character(str):
	return(inp[1:])

print(first_character(inp))
print(all_but_first_character(inp))