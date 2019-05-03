from mcpi.minecraft import Minecraft
import time as t
mc=Minecraft.create()

while True:
	pos = mc.player.getPos()
	close=40>=(pos.x**2+pos.y**2+pos.z**2)**.5
	if close:
		mc.postToChat("You are close to home")
		while close:
			t.sleep(0.001)
			pos = mc.player.getPos()
			close=40>=(pos.x**2+pos.y**2+pos.z**2)**.5
		mc.postToChat("you are no longer close to home")