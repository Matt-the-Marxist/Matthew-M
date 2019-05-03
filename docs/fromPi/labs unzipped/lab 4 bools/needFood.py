from mcpi.minecraft import Minecraft
import time as t
mc=Minecraft.create()

while True:

	needFood= not (mc.getBlock(10, 11, 12)==103)
	if needFood:
		mc.postToChat("You need food")
		while needFood:
			t.sleep(0.001)
			needFood= not (mc.getBlock(10, 11, 12)==103)
		mc.postToChat("you no longer need food")