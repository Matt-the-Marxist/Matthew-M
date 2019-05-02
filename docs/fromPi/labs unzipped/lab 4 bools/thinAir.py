from mcpi.minecraft import Minecraft
mc=Minecraft.create()

while True:
	pos = mc.player.getPos()
	inAir = mc.getBlock(pos.x, pos.y, pos.z)==0
	mc.postToChat("Player in air :", inAir)