import math
import turtle
tracey = turtle
#four triangles
for j in range(4):
	#make a triangle
	for i in range(3):
		tracey.pensize(5)
		#color change
		if i==0:
			tracey.color("blue")
		elif i==1:
			tracey.color("red")
		elif i==2:
			tracey.color("green")
		tracey.forward(50)
		tracey.left(120)
	tracey.penup()
	tracey.forward(50)
	tracey.left(60)
	tracey.forward(5)
	tracey.pendown()
