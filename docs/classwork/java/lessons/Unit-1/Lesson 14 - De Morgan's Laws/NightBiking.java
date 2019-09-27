import java.util.Scanner;

public class NightBiking
{
    public static void main(String[] args) {
        run();
    }
    
    public static void run()
    {
        Scanner s = new Scanner(System.in);
        System.out.println("Do you have a head light? ");
        boolean hasHeadlight = s.nextBoolean();
        System.out.println("Do you have a bike light? ");
        boolean hasBikelight = s.nextBoolean();
        
        // Negating an OR statement
        boolean cannotNightBike = !(hasHeadlight || hasBikelight);
        
        // Same statement!
        boolean cannotNightBikeDeMorgan = !hasHeadlight && !hasBikelight;
        
        if(cannotNightBike)
        {
            System.out.println("You may not bike at night.");
        }
        else
        {
            System.out.println("You may bike at night!");
        }
        
        if(cannotNightBikeDeMorgan)
        {
            System.out.println("You may not bike at night with De Morgan.");
        }
        else
        {
            System.out.println("You may bike at night with De Morgan!");
        }
        
        if(cannotNightBike == cannotNightBikeDeMorgan)
        {
            System.out.println("De Morgan was right!");
        }
        s.close();
    }
}

