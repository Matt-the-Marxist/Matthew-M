import mouse, keyboard, time
time.sleep(5)

print("mining...")
mouse.press("left")
while True:
	if(keyboard.is_pressed("p")):
		mouse.release("left")
		print("Paused...")
		keyboard.wait("b")
		time.sleep(1)
		print("continuing...")
		mouse.press("left")
	