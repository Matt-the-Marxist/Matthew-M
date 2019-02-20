import turtle
import math
t = turtle
"""
gets rating
tells you how you doing
if bad(<5) u get red x cause thats bad
if ok (<8) u get a yellow line cause thats ok but not the best
if good (>8) u get a green check cause thats guchie
"""
rating = float(input("rating?"))
t.bgcolor("black")

if rating<5:
	t.left(45)
	t.color("red")
	for i in range(4):
		t.fd(100)
		t.bk(100)
		t.lt(90)
elif rating<8:
	t.color("yellow")
	t.fd(100)
else:
	t.color("green")
	t.rt(45)
	t.fd(50)
	t.lt(90)
	t.fd(100)
	

t.exitonclick()