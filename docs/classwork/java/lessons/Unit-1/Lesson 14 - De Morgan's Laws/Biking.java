import java.util.Scanner;

public class Biking
{
    public static void main(String[] args) {
        run();
    }
    
    public static void run()
    {
        Scanner s = new Scanner(System.in);
        
        System.out.println("Do you have a bike? ");
        boolean hasBike = s.nextBoolean();
        System.out.println("Do you have a helmet? ");
        boolean hasHelmet = s.nextBoolean();
        
        // Negating an AND statement
        boolean cannotBike = !(hasBike && hasHelmet);
        
        // Same statement!
        boolean cannotBikeDeMorgan = !hasBike || !hasHelmet;
        
        if(cannotBike)
        {
            System.out.println("You may not bike.");
        }
        else
        {
            System.out.println("You may bike!");
        }
        
    
        if(cannotBikeDeMorgan)
        {
            System.out.println("You may not bike with De Morgan.");
        }
        else
        {
            System.out.println("You may bike with De Morgan!");
        }
        
        if(cannotBike == cannotBikeDeMorgan)
        {
            System.out.println("De Morgan was right!");
        }
        s.close();
    }
}

