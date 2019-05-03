from mcpi.minecraft import Minecraft
import time as t
mc=Minecraft.create()

while True:
	pos = mc.player.getPos()
	inATree= (mc.getBlock(pos.x, pos.y-1, pos.z) in [17, 18])
	if inATree:
		mc.postToChat("You are in a tree")
		while inATree:
			t.sleep(0.001)
			pos = mc.player.getPos()
			inATree= (mc.getBlock(pos.x, pos.y-1, pos.z) in [17, 18])
		mc.postToChat("you are no longer in a tree")