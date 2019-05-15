my_tuple = (0, 1, 2, "hi", 4, 5)

result = []
for i in my_tuple:
	if isinstance(i,str):
		result.append(my_tuple.index(i))
	else:
		result.append(i)
print(tuple(result))