from mcpi.minecraft import Minecraft
mc=Minecraft.create()

user = input("What would you like to be called?: ")
while True:
	message = input("What is your message?: ")
	mc.postToChat(user+": "message)