# gives sum of 5 numbers

def sumOf5():
	l = []
	for i in range(5):
		while True:
			try:
				l.append(int(input("Enter a Number: ")))
				break
			except:
				print("Invalid Number. Try again.")
			
	print(l)
	print("Sum:", sum(l))

sumOf5()