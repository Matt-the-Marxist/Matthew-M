def printBoard(board):
	for i in board:
		print(" ".join(i))
		
checkerBoard = []
for i in range(8):
	checkerBoard.append([])
	for j in range(8):
		if i not in range(3,5):
			checkerBoard[i].append(str((i+j)%2))
		else:
			checkerBoard[i].append(str(0))

printBoard(checkerBoard)