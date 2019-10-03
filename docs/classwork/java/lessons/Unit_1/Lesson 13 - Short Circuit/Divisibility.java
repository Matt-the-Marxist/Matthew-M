import java.util.Scanner;

public class Divisibility
{
    public static void main(String[] args) {
        run();
    }
    public static void run()
    {
        Scanner s = new Scanner(System.in);
        System.out.println("Enter the dividend: ");
        int dividend = s.nextInt();
        System.out.println("Enter the divisor: ");
        int divisor = s.nextInt();
        
        
        if( divisor!=0 && dividend / divisor == (double) dividend / divisor)
        {
            System.out.println(dividend + " is divisible by " + divisor + "!");
        }
        else
        {
            System.out.println(dividend + " is not divisible by " + divisor);
        }
        s.close();
    }
}
