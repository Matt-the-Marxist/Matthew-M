from PyDictionary import PyDictionary

dictionary=PyDictionary()

final = ""
while True:
    end = input("Give the word you would like to look up (press enter to end): ")
    if end:
        meaning = dictionary.meaning(end)
        print("\n"+end+":")
        final+=end+":\n"
        for i in meaning:
            print("\t"+i+":")
            final+="\t"+i+":\n"
            for j in range(len(meaning[i])):
                print("\t\t"+str(j+1)+": "+meaning[i][j])
                final+="\t\t"+str(j+1)+": "+meaning[i][j]+"\n"
    else:
        with open("vocab.txt", "w") as f:
            f.write(final)
        break