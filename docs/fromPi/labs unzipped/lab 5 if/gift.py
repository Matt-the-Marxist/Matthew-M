import time as t
from mcpi.minecraft import Minecraft
mc = Minecraft.create()
x = 10
y = 11
z = 12

mc.postToChat("Bring a gift to " + str(x) + ", " + str(y) + ", " + str(z))
while True:
	gift = mc.getBlock(x, y, z)
	if gift !=0:
		# if gift is a diamond block
		if gift == 57:
			mc.postToChat("thanks for the diamond")
			break
		# else if gift is a sapling
		elif gift == 6:
			mc.postToChat("I guess tree saplings are as good as diamonds...")
			break
		else:
			temp = gift
			mc.postToChat("I mean the thought is nice, but I'd prefer something else...")
			while gift == temp:
				t.sleep(0.001)
				gift = mc.getBlock(x, y, z)