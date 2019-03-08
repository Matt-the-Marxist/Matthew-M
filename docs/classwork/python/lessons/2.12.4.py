import turtle
t = turtle

len = 100
t.ht()
#circles with color
for i in range(4):
	color_choice = input("color?")
	t.color(color_choice)
	t.pu()
	t.sety(-len)
	t.pd()
	t.begin_fill()
	t.circle(len)
	t.end_fill()
	len = len -25
	
	
t.exitonclick()