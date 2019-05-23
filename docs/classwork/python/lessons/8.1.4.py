import os
clear = lambda: os.system('cls')

#prints the board
def printBoard(board):
	for i in board:
		print(" ".join(i))

#sets up the board as a 2d array
def boardSetup():
	board = []
	for i in range(3):
		board.append([])
		for j in range(3):
			board[i].append("_")
	return board

#runs the play of the game
def play(board):
	players = []
	for i in range(2):
		players.append(input("Player "+str(i+1)+" name: "))
	clear()
	
	for i in range(9):
		player = players[i%2]
		print("It's "+player+"'s Turn...")
		printBoard(board)
		while True:
			try:
				row = int(input("Row: "))
				col = int(input("Col: "))
				if board[row][col]=="_":
					break
			except:
				pass
			print("Invalid Location")
		if i%2:
			p = "o"
		else:
			p = "x"
		board[row][col] = p
		clear()
		if checkWin(p, board):
			print(player+" Wins!")
			break
	if not (checkWin("x", board) or checkWin("o", board)):
		print("It's a Draw")
#checks if the given player has won
def checkWin(p, board):
	for i in range(3):
		if board[i][0]==p and board[i][1]==p and board[i][2]==p:
			return True
		elif board[0][i]==p and board[1][i]==p and board[2][i]==p:
			return True
	if board[0][0]==p and board[1][1]==p and board[2][2]==p:
		return True
	if board[0][2]==p and board[1][1]==p and board[2][0]==p:
		return True
	else:
		return False

b = boardSetup()

play(b)
