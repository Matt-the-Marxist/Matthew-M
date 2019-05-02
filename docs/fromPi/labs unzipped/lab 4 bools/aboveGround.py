from mcpi.minecraft import Minecraft
mc=Minecraft.create()

while True:
	pos = mc.player.getPos()
	aboveGround = pos.y >= mc.getHeight(pos.x, pos.z)
	mc.postToChat("Player above ground :", aboveGround)