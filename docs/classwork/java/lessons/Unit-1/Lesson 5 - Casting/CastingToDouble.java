import java.util.Scanner;
public class CastingToDouble
{
    public static void main(String[] args) {
        Scanner s = new Scanner(System.in);
        System.out.println("First Int: ");
        int firstInt = s.nextInt();
        System.out.println("Second Int: ");
        int secondInt = s.nextInt();
        double result = (double)firstInt/(double)secondInt;
        System.out.println(result);
        s.close();
    }
}
