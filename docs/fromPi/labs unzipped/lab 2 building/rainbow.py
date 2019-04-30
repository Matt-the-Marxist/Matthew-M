from mcpi.minecraft import Minecraft

mc=Minecraft.create()

for i in range(16):
	mc.setBlock(12,12,i,35,i)