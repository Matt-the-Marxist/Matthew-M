import java.util.Scanner;

public class Taffy
{
    public static void main(String[] args) {
        Scanner s = new Scanner(System.in);
        System.out.println("Starting Taffy Timer...");
        
        float temp = 0;
        boolean hasRun = false;
        while(temp<270){
            if(hasRun){
                System.out.println("The mixture isn't ready yet.");
            }
            else{
                hasRun = true;
            }
            System.out.println("Enter the temperature: ");
            temp = s.nextFloat();

        }

        System.out.println("Your taffy is ready for the next step!");
        
        s.close();
    }
}
