from mcpi.minecraft import Minecraft
import time as t
mc=Minecraft.create()

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
		
		