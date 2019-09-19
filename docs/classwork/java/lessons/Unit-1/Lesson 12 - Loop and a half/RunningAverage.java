import java.util.Scanner;
/*
 * Has the user input several completion times for running
 * a 40 yard dash and computes the average time.
 */
public class RunningAverage
{
    public static void main(String[] args) {
        // Define the SENTINEL value that will signal
        // the end of user input
        double SENTINEL = -1;
        Scanner s = new Scanner(System.in);
        
        // Initialize variables to track the 40 yard dash times
        int numInputs = 0;
        double totalTime = 0;
        
        // Loop and a half to continually prompt the user for more input
        while(true)
        {
            // Input a new 40 yard dash time
            double time = s.nextDouble("Input your 40 yard dash time (-1 to stop): ");
            
            // User input the SENTINEL value, end the loop
            if(time == SENTINEL)
            {
                break;    
            }
            
            // Update the variables to include the new running time
            numInputs++;
            totalTime += time;
        }
        
        // Compute and print out the average running time
        double average = totalTime / numInputs;
        System.out.println("Average 40 yard dash time: " + average + " seconds.");
    }
}
