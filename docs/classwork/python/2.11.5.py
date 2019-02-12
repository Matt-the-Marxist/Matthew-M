import turtle
t = turtle
t.up()
t.setposition(-150,0)

len = 10
#5 squares
for i in range(5):
	#square
	for i in range(4):
		t.down()
		t.fd(len)
		t.lt(90)
	t.up()
	t.fd(2*len)
	len = len+10
	


t.exitonclick()