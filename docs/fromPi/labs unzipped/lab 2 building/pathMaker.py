from mcpi.minecraft import Minecraft

mc=Minecraft.create()

i=0
while True:
	pos = mc.player.getTilePos()
	x = pos.x
	y = pos.y-1
	z = pos.z
	blockType = 35
	mc.setBlock(x, y, z, blockType,i%16)
	i+=1
