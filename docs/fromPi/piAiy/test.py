import aiy.board
import aiy.voice.tts as talk

def sayHello():
	talk.say("hello")

with aiy.board.Board() as board:
	b = board.button
b.when_pressed(sayHello)