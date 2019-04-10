#gets 3 categories and 3 things in that category

for i in range(3):
	category = input("Enter a category: ")
	items = ""
	for j in range(3):
		items+=input("something in that category: ")+" "
	print(category+": "+items)