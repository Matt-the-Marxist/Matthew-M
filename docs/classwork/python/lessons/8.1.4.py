import os
clear = lambda: os.system('cls')

def printBoard(board):
	for i in board:
		print(" ".join(i))

def boardSetup():
	board = []
	for i in range(3):
		board.append([])
		for j in range(3):
			board[i].append(" ")
	return board

def play(board):
	for i in range(2):
		players.append(input("Player "+str(i)+": "))
		
	for i in range(9):
		print("It's "+players[i%2]+" Turn...")
		printBoard(board)
		while True:
			row = int(input("Row: "))
			col = int(input("Col: "))
			try:
				if board[row][col]==" ":
				break
			except:
				pass
			print("Invalid Location")
		if i%2:
			