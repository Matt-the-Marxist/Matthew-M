from mcpi.minecraft import Minecraft
import time as t
mc=Minecraft.create()

Dist(x1, y1, z1, x2, y2, z2):
	return ((x2-x1)**2+(y2-y1)**2+(z2-z1)**2)**.5

while True:
	race = input("Would you like to race?(y/n)")
	if race=="y":
		mc.postToChat("Race starts in")
		t.sleep(.5)
		mc.postToChat("3")
		t.sleep(1)
		mc.postToChat("2")
		t.sleep(1)
		mc.postToChat("1")
		t.sleep(1)
		mc.postToChat("GO")
		start = mc.player.getPos()
		t.sleep(10)
		end = mc.player.getPos()
		dist = round(Dist(start.x, start.y, start.z, end.x, end.y, end.z), 2)
		mc.postToChat("You went "+str(dist)+" blocks")
		
		