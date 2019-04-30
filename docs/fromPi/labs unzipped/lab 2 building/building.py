from mcpi.minecraft import Minecraft
mc=Minecraft.create()

x = 0
z = 0
for y in range(16):
	print(mc.block.Block(35).data(y))
	