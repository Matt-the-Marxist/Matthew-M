# prints a checker board
def printBoard(board):
	for i in board:
		print(" ".join(i))
		
checkerBoard = []
for i in range(8):
	checkerBoard.append([])
	for j in range(8):
		checkerBoard[i].append(str((i+j)%2))

printBoard(checkerBoard)