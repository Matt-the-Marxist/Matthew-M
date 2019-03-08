import turtle
import random 

t = turtle
r = random

t.bgcolor("black")

class Star:
	xspeed = 1
	def __init__(self, x, y):
		self.x = x
		self.y = y
		self.h = r.randint(0,360)
	
	def show():
		print(self.x,self.y)
		t.pu()
		t.goto(self.x, self.y)
		t.pd()
		t.color("white")
		t.seth(self.h)
		for i in range(5):
			t.fd(20)
			t.lt(144)

stars = []
for i in range(100):
	stars.append(Star(r.randint(-400,400), r.randint(-400,400)))

for i in range(len(stars)):
	print(str(stars[i].x)+","+str(stars[i].y))

t.exitonclick()