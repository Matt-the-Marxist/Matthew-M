import turtle
t = turtle
"""
iterates through row and col
draws a square for every space
uses the sum of row and col to determine color
"""
row=0
col=0
width=50

t.speed(0)
while col<8:
	while row<8:
		t.goto((3*width)-(col*width),(3*width)-(row*width))
		t.pd()
		if (row+col)%2==0:
			t.color("red")
		else:
			t.color("black")
		t.right(45)
		t.begin_fill()
		t.circle(width/2**.5,360,4)
		t.end_fill()
		t.lt(45)
		t.pu()
		row+=1
	row =0
	col+=1
t.ht()
t.goto(0,0)

		
t.exitonclick()