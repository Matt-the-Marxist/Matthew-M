import pyttsx3
from gtts import gTTS

talk = pyttsx3.init()
prob5 = """
5
A company that manufactures smartphones developed a new battery that has a longer life span than that of a traditional battery. From the date of purchase of a smartphone, the distribution of the life span of the new battery is approximately normal with mean 30 months and standard deviation 8 months. For the price of $50, the company offers a two-year warranty on the new battery for customers who purchase a smartphone. The warranty guarantees that the smartphone will be replaced at no cost to the customer if the battery no longer works within 24 months from the date of purchase.
ae
In how many months from the date of purchase is it expected that 25 percent of the batteries will no longer work? Justify your answer.
bee
Suppose one customer who purchases the warranty is selected at random. What is the probability that the customer selected will require a replacement within 24 months from the date of purchase because the battery no longer works?
see
The company has a gain of $50 for each customer who purchases a warranty but does not require a replacement. The company has a loss (negative gain) of $150 for each customer who purchases a warranty and does require a replacement. What is the expected value of the gain for the company for each warranty purchased?
"""
a = """
Part ae.
24.604 months.
inverse norm point 2 5, mew= 30 months, σ=8months
"""
b = """
part bee.
.226627 .
normal C D F -1 ee 99 to 24 months, mew= 30 months, =8months
"""
c = """
part see.
$4.67. take the value for each outcome and multiply by the probability of the outcome.
then sum all the resulting values. this is the expected value.
in this case it is
minus $150 times .22663 ≈ minus $33.99
and
$50 times .77337 ≈ $38.67
and finally
minus $33.99 + $38.67 ≈ $4.67
"""

# tts = gTTS(text=prob5, lang='en')
# tts.save(r"C:\Users\Matthew Morrissette\Documents\GitHub\schoolStuff\docs\personalProjects\stats\prob5.mp3")
# tts = gTTS(text=a, lang='en')
# tts.save(r"C:\Users\Matthew Morrissette\Documents\GitHub\schoolStuff\docs\personalProjects\stats\prob5PartA.mp3")
# tts = gTTS(text=b, lang='en')
# tts.save(r"C:\Users\Matthew Morrissette\Documents\GitHub\schoolStuff\docs\personalProjects\stats\prob5PartB.mp3")
tts = gTTS(text=c, lang='en')
tts.save(r"C:\Users\Matthew Morrissette\Documents\GitHub\schoolStuff\docs\personalProjects\stats\prob5PartC.mp3")
print("Conversion Complete")
#talk.say(prob5)
#talk.runAndWait()