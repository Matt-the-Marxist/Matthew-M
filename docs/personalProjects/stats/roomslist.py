import random, json

def checkIfValid(n):
	if n in range(1,8):
		return False
	if n in range(15,24):
		return False
	if n in range(40,100):
		return False
	if n in range(160,200):
		return False
	return True

		
rooms = []
random.seed("Argiropolis")

try:
	data = open("data.json","r").read()
	data = json.loads(data)
	ppms = data
except:
	ppms = {}

for i in range(40):
	while True:
		r = random.randrange(1,270)
		if r not in rooms and checkIfValid(r):
					rooms.append(r)
					break
rooms.sort()

for i in rooms:
	try:
		data[i]
	except:
		ppm = input("Room "+str(i)+" CO2 count: ")
		if ppm!="":
			ppms[i] = ppm
			json.dump(ppms, open("data.json", "w"))