import turtle
t = turtle

#get length from user
length = int(input("length?"))
t.pu()
t.goto(-200, -200)

#make 4 squares
for i in range(4):
	t.forward(400)
	t.lt(90)
	#make square
	for i in range(4):
		t.pd()
		t.forward(length)
		t.pu()
		t.lt(90)
		