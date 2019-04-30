def tp(x, y, z):
	mc.player.setPos(x, y, z)
	print("teleported to", x, y, z)
	time.sleep(1)
	
	
	
	
from mcpi.minecraft import Minecraft
import random
import time
mc=Minecraft.create()

while True:
	x = random.randint(-127, 127)
	z = random.randint(-127, 127)
	y = mc.getHeight(x, z)
	tp(x, y, z)
	
