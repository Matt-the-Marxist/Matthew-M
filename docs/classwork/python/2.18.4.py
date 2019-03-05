import turtle
t = turtle
"""
creates a length variable 
and while it's less than 400
	draws a square
	logs length
	and changes length
"""

length = 0

while length<400:
	print(length)
	t.pu()
	t.sety(-length/2)
	for i in range(4):
		t.pd()
		t.fd(length/2)
		t.lt(90)
		t.fd(length/2)
	length = length+50

t.exitonclick()