#prints whether or not in is divisible by 3
import pprint
pprint.pprint([{str(x):x%3==0} for x in range(1, 11)])