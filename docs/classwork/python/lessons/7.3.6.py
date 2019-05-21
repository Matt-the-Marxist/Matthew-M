# counts owls
import re

def countOwls(str):

	return(len(re.findall("owl", str, flags = re.IGNORECASE)))

print(countOwls(input("Enter some text: ")))