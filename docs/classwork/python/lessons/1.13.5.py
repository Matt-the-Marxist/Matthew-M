import turtle
t = turtle

radius = float(input("radius?"))

def circInSquare(r):
	#circle
	t.color("blue")
	t.circle(r)
	t.color("red")
	#square
	for i in range(4):
		t.fd(r)
		t.lt(90)
		t.fd(r)

circInSquare(radius)

t.exitonclick()