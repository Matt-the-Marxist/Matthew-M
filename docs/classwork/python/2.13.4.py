import turtle
t = turtle
color_choice = []
for i in range(4):
	color_choice.append(input("color?"))

#make a segment of the caterpillar
def segment(color,radius):
	t.pd()
	t.color(color)
	t.begin_fill()
	t.circle(radius)
	t.end_fill()
	t.pu()
	t.fd(2*radius)

for i in range(8):
	segment(color_choice[i%4],10)

t.exitonclick()