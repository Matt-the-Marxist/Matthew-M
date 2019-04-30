from mcpi.minecraft import Minecraft
mc=Minecraft.create()

while True:
	message = input("What is your message?: ")
	mc.postToChat(message)