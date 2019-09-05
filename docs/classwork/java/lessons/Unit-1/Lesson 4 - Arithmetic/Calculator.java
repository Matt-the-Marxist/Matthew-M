import java.util.Scanner;
public class Calculator
{
    public static void main(String[] args) {
        Scanner s = new Scanner(System.in);
        System.out.println("First: ");
        int first = s.nextInt();
        System.out.println("Second: ");
        int second = s.nextInt();
        int sum = first + second;
        System.out.println(sum);
        s.close();
    }
        
}
