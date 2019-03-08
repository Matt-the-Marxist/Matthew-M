def draw_bead():
	tracey.forward(100)
	tracey.pendown()
	tracey.circle(10)
	tracey.penup()
	tracey.backward(100);
	tracey.left(10)

import turtle
tracey = turtle
tracey.penup()
for i in range(36):
	draw_bead()