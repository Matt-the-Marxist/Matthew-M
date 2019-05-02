"""
This code will fill the canvas with light blue circles.
"""
import turtle
import math
tracey = turtle

tracey.speed(0)

# This function will draw a row of 10 circles.
def draw_circle_row():
	for i in range(10):
		tracey.pendown()
		tracey.begin_fill()
		tracey.color("light blue")
		tracey.circle(20)
		tracey.end_fill()
		tracey.penup()
		tracey.forward(40)
		
def move_up_a_row():
	tracey.left(90)
	tracey.forward(40)
	tracey.right(90)
	tracey.backward(400)
	
def make_highlight():
	turtle.pensize(5)	
	tracey.pendown()
	tracey.color("white")
	tracey.circle(10,90)
	tracey.penup()
	tracey.left(135)
	tracey.forward(10*math.sqrt(2))
	tracey.left(135)
	tracey.forward(40)
    
# Send Tracy to starting position in bottom left corner.
tracey.penup()
tracey.setposition(-180,-200)

# Call circle drawing function
for i in range(10):
    draw_circle_row()
    move_up_a_row()

tracey.setposition(190,-180)
tracey.left(90)

for i in range(10):
	for i in range(10):
		make_highlight()
	move_up_a_row()
turtle.exitonclick()