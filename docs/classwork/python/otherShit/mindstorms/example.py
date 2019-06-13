import os
import sys
import time
import rpyc


ON = True
OFF = False

host = '216.107.212.234'

try:
	conn = rpyc.classic.connect(host)
	ev3 = conn.modules[ev3dev.ev3]
except:
	print(sys.exc_info()[1])
finally:
	from ev3dev import ev3
