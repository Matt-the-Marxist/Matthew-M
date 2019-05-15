def dist(p1, p2):
	return (pow((p1[0]-p2[0]),2)+pow((p1[1]-p2[1]),2))**.5

print(dist((1, 1), (4, 5)))