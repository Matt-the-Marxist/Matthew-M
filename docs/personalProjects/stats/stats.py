import pprint

def OneVarStats(*args):
    result = {}
    l1 = args[0]
    try:
        fl = args[1]
        result["n"] = sum(fl)
    except:
        fl = []
        result["n"] = 0
        for i in l1:
            fl.append(1/len(l1))
            result["n"] += 1
           
    result["µ"] = mean(l1, fl)
    result["σx"],result["Sx"] = stdev(l1, fl)
    result["min"] = min(l1)
    result["max"] = max(l1)
    return result
    

def mean(*args):
    l1 = args[0]
    try:
        fl = args[1]
        n = sum(fl)
        if sum(fl) !=1:
            fl = [x/sum(fl) for x in fl]
    except:
        fl = []
        n = 0
        for i in l1:
            fl.append(1/len(l1))
            n += 1
           
    return sum([a*b for a,b in zip(l1,fl)])

def stdev(*args):
    l1 = args[0]
    try:
        fl = args[1]
        n = sum(fl)
        if sum(fl) !=1:
            fl = [x/sum(fl) for x in fl]
    except:
        fl = []
        n = 0
        for i in l1:
            fl.append(1/len(l1))
            n += 1
    m = mean(l1,fl)
    
    stdev = (((1/n)*sum([(x-m)**2 for x,f in zip(l1,fl)]))**.5, ((1/(n-1))*sum([(x-m)**2 for x,f in zip(l1,fl)]))**.5)
    return stdev
    
    
list1 = [1,2,3,4,5,6]
list2 = [6,5,4,3,2,1]

pprint.pprint(OneVarStats(list1, list2), width=4, indent=4)