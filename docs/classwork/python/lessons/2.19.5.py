import turtle
t = turtle

"""
This code will ask the user how many CIRCLES they want on the bottom of the pyramid
and then draw a pyramid of CIRCLES, subtracting one block from each row.
"""
# Set row value to 0
row_value=0

# This function moves to next row with x-value based on how many CIRCLES are to
# be placed and the y-value based on the row number (gets 50 pixels higher each row)    
def move_to_row(num_CIRCLES):
	x_value = -((num_CIRCLES*50)/2)
	y_value = -200+(25*row_value*3**.5)
	t.penup()
	t.setposition(x_value,y_value)
	print(y_value)
	t.pendown()

# This function draw a row of CIRCLES based on user value    
def draw_block_row(num_CIRCLES):
	for i in range(num_CIRCLES):
		t.circle(25)
		t.pu()
		t.forward(50)
		t.pd()

# Ask the user how many CIRCLES should be on bottom row        
num_CIRCLES=int(input("How many CIRCLES on the bottom row? (8 or less): "))

# Call function to move Tracy to beginning of row position and then increase row
# variable value. Then Tracy will draw the row of CIRCLES needed and subtract one
# from the num CIRCLES variable.
while num_CIRCLES>8:
	print("FOLLOW THE RULES")
	
	print("")
	print("How many CIRCLES on the bottom row? (8 OR LESS): ")
	print("                                     ¯¯¯¯¯¯¯¯¯")
	num_CIRCLES=int(input())
	
	
for i in range(num_CIRCLES):
	t.speed(0)
	move_to_row(num_CIRCLES)
	row_value=row_value+1
	draw_block_row(num_CIRCLES)
	num_CIRCLES=num_CIRCLES-1

t.exitonclick()

#CIRCLES is in caps cause i took the blocks and 
