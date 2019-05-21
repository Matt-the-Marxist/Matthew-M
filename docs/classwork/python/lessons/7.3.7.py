# replaces "i" with "!"
import re

def replI(str):

	return(re.sub("i","!", str))

print(replI(input("Enter some text: ")))