public class RandomizerTester
{
    public static void main(String[] args) {
        // Generate 10 random ints
        // These are static methods! Notice that 
        // `Randomizer` is capitalized and we are 
        // calling a method on the *class* not
        // the instance. 
        for(int i = 0; i < 10; i++)
        {
            System.out.println(Randomizer.nextInt(1, 10));
        }
    }
}