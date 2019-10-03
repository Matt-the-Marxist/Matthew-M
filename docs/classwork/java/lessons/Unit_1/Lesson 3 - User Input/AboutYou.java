import java.util.Scanner;

public class AboutYou
{
    public static void main(String[] args)
    {
        Scanner s = new Scanner (System.in);

        System.out.println("What is your favorite food?");
        String name = s.nextLine();

        System.out.println("What is your favorite color?");
        String color = s.nextLine();

        System.out.println("What is your favorite movie?");
        String movie = s.nextLine();

        System.out.println(name+"\n"+color+"\n"+movie);

        s.close();
    }

}
