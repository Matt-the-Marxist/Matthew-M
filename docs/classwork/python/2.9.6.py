def draw_bead():
	#from center
	tracey.forward(100)
	
	#draw bead
	tracey.pendown()
	tracey.begin_fill()
	tracey.circle(10)
	tracey.end_fill()
	tracey.penup()
	
	#back to center
	tracey.backward(100);
	tracey.left(10)

def color_change(i):
	if i%3==0:
		tracey.color("red")
	elif i%3==1:
		tracey.color("purple")
	elif i%3==2:
		tracey.color("blue")

import turtle
tracey = turtle
tracey.penup()
for i in range(36):
	color_change(i)
	draw_bead()