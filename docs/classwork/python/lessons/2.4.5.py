import turtle
tracey = turtle
tracey.penup()
tracey.backward(200)

for i in range(20):
	tracey.pendown()
	tracey.circle(10)
	tracey.penup()
	tracey.forward(20)