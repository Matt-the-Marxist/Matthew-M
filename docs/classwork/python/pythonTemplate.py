import turtle
t = turtle
"""
"""
count = 10 
length = 10
while count > 0:
	for i in range(4):
		t.forward(length)
		t.left(90)
		length = length+10
		count = count - 1 
		
t.exitonclick()