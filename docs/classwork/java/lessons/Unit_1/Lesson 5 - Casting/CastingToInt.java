import java.util.Scanner;

public class CastingToInt
{
    public static void main(String[] args) {
        Scanner s = new Scanner(System.in);
        System.out.println("Please input your double: ");
        double myDouble = s.nextDouble();
        System.out.println((int)myDouble);
        s.close();
    }
}
