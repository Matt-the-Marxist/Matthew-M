from mcpi.minecraft import Minecraft
mc = Minecraft.create()

def tp(startX1, startY1, startZ1, startX2, startY2, startZ2, tpLocX, tpLocY, tpLocZ):
	if (px in arange(startX1,startX2,0.001))and(py in arange(startY1,startY2,0.001))and(pz in arange(startZ1,startZ2,0.001)):
		mc.player.setPos(tpLocX, tpLocY, tpLocZ)

while true:
	px = mc.player.getPos().x
	py = mc.player.getPos().y
	pz = mc.player.getPos().z
	
	tp(-1, 0, -1, 1, 20, 1, 0, 0, 64)
	if(px>-1 and px<1)and(py>-10 and py<10)and(pz>-1 and pz<1):
		# Set x, y, and z variables to represent coordinates
		x = 0
		y = 110
		z = 0
		# Change the player's position
		mc.player.setPos(x, y, z)
