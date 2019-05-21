# returns max of list

def Max(myList = [],*args):
	max  = -float("inf")
	for i in myList:
		i = float(i)
		if i > max:
			max = i
	return max

my_list = [5, 2, -5, 10, 23, -21]

print(Max(my_list))