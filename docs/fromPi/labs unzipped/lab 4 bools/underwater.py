from mcpi.minecraft import Minecraft
import time as t
mc=Minecraft.create()

while True:
	pos = mc.player.getPos()
	underwater= (mc.getBlock(pos.x, pos.y+1, pos.z) in [8, 9])
	if underwater:
		mc.postToChat("You are underwater")
		while underwater:
			t.sleep(0.001)
			pos = mc.player.getPos()
			underwater= (mc.getBlock(pos.x, pos.y+1, pos.z) in [8, 9])
		mc.postToChat("you are no longer underwater")