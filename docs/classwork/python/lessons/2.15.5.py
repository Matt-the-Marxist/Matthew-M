import turtle
t = turtle
"""
four bars
with height i
goes forward 35 because the width is 10 and the distance between them is 25 so that makes 35
"""
for i in range(10,60,10):
	t.pd()
	t.begin_fill()
	for j in range(2):
		t.fd(10)
		t.lt(90)
		t.fd(i)
		t.lt(90)
	t.end_fill()
	t.pu()
	t.fd(35)

t.exitonclick()