import turtle
t = turtle
"""
does 4 circles
at the the radius i
after setting the y coordinate to -i
"""
for i in range(100,0,-25):
	t.pu()
	t.sety(-i)
	t.pd()
	t.circle(i)
	
t.exitonclick()