import turtle
import random 
import math

t = turtle
r = random
m = math

t.bgcolor("black")

t.speed(0)
t.ht()

height = turtle.window_height()
width = turtle.window_width()


# makes sure that the x and y of the star 
# isn't where the planet is gonna be
def starSetter():
	x = r.randint(-width/2,width/2) 
	y = r.randint(-height/2,height/2)
	print((x*x+y*y)**.5>160)
	
	if( (x*x+y*y)**.5>160 ):
		star(x, y)
	else:
		starSetter()

#  draws a star
def star(x, y):
	t.pu()
	t.goto(x, y)
	t.pd()
	t.color("white")
	t.seth(r.randint(0,360))
	for i in range(5):
		t.fd(10)
		t.lt(144)

# 
def water():
	t.pu()
	t.goto(0,-150)
	t.color("dark blue")
	t.pd()
	t.begin_fill()
	t.seth(0)
	t.circle(150)
	t.end_fill()

# makes sure that the land is on the planet
def landSetter(x,y):
	theta = m.degrees(m.atan(-x/y))
	dist = (x*x+y*y)**.5
	if dist > 150:
		landSetter(r.randint(-150,150), r.randint(-150,150))
	else:
		rad = r.randint(10, int(dist/2))
		land(x,y,rad,theta)
		
def land(x,y,r,theta):
	t.pu()
	t.goto(x,y)
	t.color("dark green")
	t.seth(theta-180)
	if y<=0:
		t.seth(theta)
		
	t.begin_fill()
	t.circle(r)
	t.end_fill()


water()

for i in range(r.randint(5,15)):
	landSetter(r.randint(-150,150), r.randint(-150,150))

for i in range(200):
	starSetter()

t.exitonclick()