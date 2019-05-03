from mcpi.minecraft import Minecraft
import time as t
mc=Minecraft.create()

while True:
	pos = mc.player.getPos()
	swimming= (mc.getBlock(pos.x, pos.y, pos.z) in [8, 9])
	if swimming:
		mc.postToChat("You are swimming")
		while swimming:
			t.sleep(0.001)
			pos = mc.player.getPos()
			swimming= (mc.getBlock(pos.x, pos.y, pos.z) in [8, 9])
		mc.postToChat("you are no longer swimming")