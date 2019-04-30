my_string = "hello"

#my guess line 1

try:
	my_string[0] = "H"
except:
	print("line1 fail")
try:
	my_string = "H" + my_string[1:]
except:
	print("line2 fail")