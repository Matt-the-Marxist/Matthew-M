from mcpi.minecraft import Minecraft
mc=Minecraft.create()

while True:
	pos = mc.player.getPos()
	swimming = mc.getBlock(pos.x, pos.y, pos.z) in [8, 9]
	mc.postToChat("swimming :",swimming)