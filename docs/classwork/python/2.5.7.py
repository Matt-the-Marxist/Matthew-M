import turtle
tracey = turtle
tracey.penup()
tracey.right(90)
tracey.forward(395)
tracey.right(-90)
tracey.forward(200)
for i in range(3):
	tracey.backward(100)
	tracey.pendown()
	tracey.circle(50)
	tracey.penup()

tracey.left(60)
tracey.forward(100)
tracey.left(-60)
tracey.forward(200)

for i in range(2):
	tracey.backward(100)
	tracey.pendown()
	tracey.circle(50)
	tracey.penup()

tracey.left(60)
tracey.forward(100)
tracey.left(-60)
tracey.pendown()
tracey.circle(50)