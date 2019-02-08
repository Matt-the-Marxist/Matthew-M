def outside_box():
	tracey.penup()
	tracey.right(45)
	tracey.forward(400)
	tracey.pendown()
	tracey.left(90)
	tracey.begin_fill()
	tracey.circle(400,360,4)
	tracey.end_fill()
	
def semicircle():
	tracey.color("yellow")
	tracey.begin_fill()
	tracey.circle(50,180)
	tracey.left(90)
	tracey.forward(100)
	

import turtle
tracey = turtle
outside_box()
tracey.penup()
tracey.left(90)
tracey.forward(100)
tracey.right(90)
tracey.pendown()
semicircle()