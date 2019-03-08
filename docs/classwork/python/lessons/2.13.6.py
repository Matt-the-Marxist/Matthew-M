import turtle
t = turtle
radius = float(input("bottom ball radius?"))

def snowman(r):
	t.color("grey")
	#tres balls
	for i in range(3):
		t.begin_fill()
		t.circle(r)
		t.end_fill()
		t.pu()
		t.lt(90)
		t.fd(2*r)
		t.rt(90)
		t.pd()
		r = r/2

snowman(radius)

t.exitonclick()