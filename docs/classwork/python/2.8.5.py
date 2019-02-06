def draw_circle():
	tracey.circle(25)
	tracey.penup()
	tracey.left(90)
	tracey.forward(50)
	tracey.right(90)
	tracey.pendown()

def draw_square():
	tracey.backward(25)
	for j in range(4):
		tracey.forward(50)
		tracey.left(90)
	tracey.forward(25)
	tracey.penup()
	tracey.left(90)
	tracey.forward(50)
	tracey.right(90)
	tracey.pendown()
	
	

import turtle
tracey = turtle
tracey.penup()
tracey.right(90)
tracey.forward(400)
tracey.left(90)
tracey.pendown()

for i in range(8):
	draw_square()
	draw_circle()