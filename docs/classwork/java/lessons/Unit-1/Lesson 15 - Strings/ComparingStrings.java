import java.util.Scanner;

public class ComparingStrings
{
    public static void main(String[] args) {
        run();
    }
    
    public static void run()
    {
        Scanner s = new Scanner(System.in);
        System.out.println("Favorite Website? ");
        String favoriteWebsite = s.nextLine();
        
        if(favoriteWebsite.equals("Google"))
        {
            System.out.println("Good Choice");
        }
        s.close();
    }
}

