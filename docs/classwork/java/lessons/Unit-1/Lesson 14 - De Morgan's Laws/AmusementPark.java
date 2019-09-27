import java.util.Scanner;

public class AmusementPark
{
    static int AGE_LIMIT = 12;
    static int HEIGHT_LIMIT = 48;
    
    public static void main(String[] args) {
        run();
    }

    public static void run()
    {
        Scanner s = new Scanner(System.in);
        System.out.println("Enter your age: ");
        int age = s.nextInt();
        System.out.println("Enter your height in inches: ");
        int height = s.nextInt();
        
        boolean oldEnough = age >= AGE_LIMIT;
        boolean tallEnough = height >= HEIGHT_LIMIT;
        
        // CHANGE THIS LINE
        // Convert this boolean expression into its De Morgan equivalent
        boolean cannotRide = !oldEnough || !tallEnough;
        
        if(cannotRide)
        {
            System.out.println("You may not ride the rollercoasters.");
        }
        else
        {
            System.out.println("You may ride the rollercoasters!");
        }
        
        System.out.println("Can you swim? ");
        boolean canSwim = s.nextBoolean();
        System.out.println("Do you have a life jacket? ");
        boolean hasLifeJacket = s.nextBoolean();
        
        // CHANGE THIS LINE
        // Convert this boolean expression into its De Morgan equivalent
        boolean cannotSwim = !canSwim && !hasLifeJacket;
        
        if(cannotSwim)
        {
            System.out.println("You may not swim in the pool.");
        }
        else
        {
            System.out.println("You may swim in the pool!");
        }
        s.close();
    }
    
}

