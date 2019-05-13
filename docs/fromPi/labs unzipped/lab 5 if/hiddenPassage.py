import time as t
from mcpi.minecraft import Minecraft
mc = Minecraft.create()
x = 10
y = 11
z = 12
gift = 0
while True:
	if gift != 0:
		if gift == 57:
			pos = mc.player.getPos
			for y in range(-64, pos.y):
				mc.setBlock(pos.x, y, pos.z, 0);
			mc.postToChat("Thanks for the diamond, Sucker")
		else:
			mc.postToChat("Mmm no.")
	else:
		mc.postToChat("Place an offering on the pedestal.")
		while gift == 0:
			gift = mc.getBlock(x, y, z)
			t.sleep(0.001)
