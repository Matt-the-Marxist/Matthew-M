author_name = ("Martin", "Luther", "King, Jr.")

def citeAuthor(authorNameTuple):
	result = []
	result.append(authorNameTuple[len(authorNameTuple)-1])
	for i in range(len(authorNameTuple)-1):
		result.append(authorNameTuple[i])
	return(tuple(result))


print(citeAuthor(author_name))