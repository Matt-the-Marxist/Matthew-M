import java.util.Scanner;

public class RollerCoaster
{
    public static void main(String[] args)
    {
        Scanner s = new Scanner(System.in);
        
        System.out.println("How tall are you?(cm)");
        int height = s.nextInt();
        
        System.out.println("How old are you?(years)");
        int age = s.nextInt();
        
        boolean canRide = height>=100 && age>=10;

        System.out.println("Can Ride? "+canRide);

        s.close();
    }
}
