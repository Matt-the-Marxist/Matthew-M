import turtle
t = turtle
t.speed(0)
t.penup()
t.goto(-200, -200)
for i in range(4):
	t.pendown()
	for i in range(8):
		for i in range(4):
			t.forward(50)
			t.left(90)
		t.forward(50)
	t.left(90)

t.exitonclick()