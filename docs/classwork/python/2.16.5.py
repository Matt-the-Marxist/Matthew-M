import turtle
import math
t = turtle
"""
goes in a loop 6 times
if even starts fill
draws a square
moves to the next
"""
t.bk(math.sqrt(2)*150)
for i in range(6):
	if i%2==0:
		t.begin_fill()
	t.rt(45)
	t.pd()
	t.circle(50,360,4)
	t.end_fill()
	t.pu()
	t.lt(45)
	t.fd(math.sqrt(2)*50)
	
t.exitonclick()