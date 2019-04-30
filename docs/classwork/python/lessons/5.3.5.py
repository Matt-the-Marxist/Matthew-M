def mult(a, b):
	#print(a*b)
	return a*b

arr = []
for i in range(1000):
	arr.append([])
	for j in range(1000):
		arr[i].append(mult(i, j))

for i in range(len(arr)):
	print(arr[i])