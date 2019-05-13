from mcpi.minecraft import Minecraft
mc = Minecraft.create()
while True:
	x = int(input("Enter x: "))
	y = int(input("Enter y: "))
	z = int(input("Enter z: "))
	valid =  not (-127 < x < 127 and -64 < y <63 not -127 < z < 127):
	
	if valid:
		mc.player.setPos(x, y, z)
		break
	else:
		mc.postToChat("Please enter a valid location")
