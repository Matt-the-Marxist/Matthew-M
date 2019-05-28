import os
coordinates = []

def clear():
	os.system('cls')

def Slope(*points):
	p1 = points[0]
	p2 = points[1]

	slope = (p1[1]-p2[1])/(p1[0]-p2[0])
	return slope

for i in range(5):
	coordinates.append((int(input("x: ")),int(input("y: "))))
	clear()

for i in range(len(coordinates)-1):
	print("slope =",Slope(coordinates[i], coordinates[i+1]))
	