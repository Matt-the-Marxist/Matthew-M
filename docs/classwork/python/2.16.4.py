import turtle
import math
t = turtle
"""
asks for happiness
if sad u get nothing
if happy u get a big happy cyclops
"""
happy = input("Are You Happy?(y/n)")

if happy =="y":
	t.pu()
	t.sety(-100)
	t.pd()
	t.circle(100)
	t.pu()
	t.goto(0,0)
	t.rt(135)
	t.fd(75)
	t.lt(90)
	t.pd()
	t.circle(75,90)
	t.pu()
	t.seth(0)
	for i in range(50,0,-25):
		t.pu()
		t.goto(0,-i+25)
		t.pd()
		t.circle(i)

t.exitonclick()