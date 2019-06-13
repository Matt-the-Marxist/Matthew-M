import math

for i in range(361):
	if math.fabs(math.sin(math.radians(i)))==1:
		print(i)
	if math.fabs(math.cos(math.radians(i)))==1:
		print(i)
	if math.fabs(math.tan(math.radians(i)))==1:
		print(i)
