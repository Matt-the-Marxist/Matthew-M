import turtle
t = turtle

rad = 25

#makes concentric circles
for i in range(4):
	t.penup()
	t.sety(-rad)
	t.pendown()
	t.circle(rad)
	rad = rad +25
	
t.exitonclick()