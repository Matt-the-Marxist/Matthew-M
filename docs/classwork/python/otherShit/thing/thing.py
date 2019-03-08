import turtle
import random 
import math

t = turtle
r = random
m = math

t.bgcolor("black")

t.speed(0)

height = turtle.window_height()
width = turtle.window_width()

def star(x, y):
	t.pu()
	t.goto(x, y)
	t.pd()
	t.color("white")
	t.seth(r.randint(0,360))
	for i in range(5):
		t.fd(10)
		t.lt(144)

def water():
	t.pu()
	t.goto(0,-150)
	t.color("dark blue")
	t.pd()
	t.begin_fill()
	t.seth(0)
	t.circle(150)
	t.end_fill()

def starSetter():
	x = r.randint(-width/2,width/2) 
	y = r.randint(-height/2,height/2)
	print((x*x+y*y)**.5>160)
	
	if( (x*x+y*y)**.5>160 ):
		star(x, y)
	else:
		starSetter()
	

def land(x,y,r,theta):
	t.pu()
	t.goto(x,y)
	t.color("dark green")
	t.seth(theta-90)
	
	
	

def landSetter(x,y,r):
	theta = m.degrees(m.atan(x/y))
	dist = (x*x+y*y)**.5
	if dist > 150:
		landSetter(r.randint(-150,150), r.randint(-150,150), r.randint(0,150))
	else:
		land(x,y,r,theta)
		
"""
for i in range(200):
	starSetter()
"""

water()

for i in range(r.randint(0,15)):
	landSetter(r.randint(-150,150), r.randint(-150,150), r.randint(0,150))

t.exitonclick()