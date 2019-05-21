

def fiveAuthors():
	authors = []
	for i in range(5):
		authors.append(input("Name: "))
			
	authors.sort()
	print(authors)

fiveAuthors()