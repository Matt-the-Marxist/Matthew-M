from mcpi.minecraft import Minecraft
import random
mc = Minecraft.create()

while True:
    x = mc.player.getTilePos().x
    y = mc.player.getTilePos().y
    z = mc.player.getTilePos().z

    mc.setBlock(x, y, z, 0)
    print("set")
