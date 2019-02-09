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
	tracey.left(45)
	tracey.color("yellow")
	tracey.begin_fill()
	tracey.circle(100,180)
	tracey.end_fill()
	
def circle():
	tracey.color("blue")
	tracey.begin_fill()
	tracey.circle(100)
	tracey.end_fill()
	
def square():
	tracey.color("red")
	tracey.begin_fill()
	tracey.circle(50*math.sqrt(math.pi)*math.sqrt(2),360,4)
	tracey.end_fill()
	
def pentagon():
	tracey.color("green")
	tracey.begin_fill()
	tracey.circle(110,360,5)
	tracey.end_fill()
	

import math
import turtle
tracey = turtle
tracey.ht()

#outer box
outside_box()
tracey.penup()

#move to start for semicircle
tracey.left(120)
tracey.forward(150)
tracey.right(210)

#draw semicircle
tracey.pendown()
semicircle()
tracey.penup()

#move to spot for circle
tracey.forward(250)

#draw circle
tracey.pendown()
circle()
tracey.penup()

#move to spot for square
tracey.right(90)
tracey.forward(100)
tracey.left(90)
tracey.forward(37.5*math.sqrt(math.pi)*math.sqrt(2))
tracey.left(135)

#draw square
tracey.pendown()
square()
tracey.penup()

#move to spot for pentagon
tracey.left(45)
tracey.forward(350)
tracey.left(90)
tracey.forward(200)
tracey.left(90)

#draw pentagon
tracey.pendown()
pentagon()

#stay open
tracey.exitonclick()