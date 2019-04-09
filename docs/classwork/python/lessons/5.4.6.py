#prints all possibilities for 2d6
for i in range(1,7):
	for j in range(1,7):
		print(str(i)+","+str(j)+"="+str(i+j))