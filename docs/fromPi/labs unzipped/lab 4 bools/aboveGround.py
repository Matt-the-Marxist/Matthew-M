from mcpi.minecraft import Minecraft
mc=Minecraft.create()

while True:
	pos = mc.player.getPos()
	mc.postToChat("Player above ground :", aboveGround)
	

while True:
	pos = mc.player.getPos()
	aboveGround = pos.y >= mc.getHeight(pos.x, pos.z)
	if aboveGround:
		mc.postToChat("You are in air")
		while aboveGround:
			t.sleep(0.001)
			pos = mc.player.getPos()
			aboveGround = pos.y >= mc.getHeight(pos.x, pos.z)
		mc.postToChat("you are no longer in air")