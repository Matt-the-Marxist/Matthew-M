orders = []
orders.append(("Lee", 0, 2))
orders.append(("Tamia", 1, 0))
orders.append(("Edward", 1, 1))

def getTotal(people):
	totalB = 0
	totalD = 0
	for i in people:
		totalB += i[1]
		totalD += i[2]
	return (totalB, totalD)

total = getTotal(orders)
print("You need to buy",total[0],"burgers.")
print("You need to buy",total[1],"hotdogs.")