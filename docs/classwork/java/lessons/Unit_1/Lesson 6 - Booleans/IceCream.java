import java.util.Scanner;

public class IceCream
{
    public static void main(String[] args)
    {
        Scanner s = new Scanner(System.in);
        System.out.println("Do you like Ice Cream?");
        boolean answer = s.nextBoolean();
        System.out.println(answer);
        s.close();
    }
}
