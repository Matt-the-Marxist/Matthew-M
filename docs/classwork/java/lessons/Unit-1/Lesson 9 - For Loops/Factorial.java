import java.util.Scanner;

public class Factorial
{
    public static void main(String[] args) {
        Scanner s = new Scanner(System.in);
        System.out.println("Factorial of ?");
        int num = s.nextInt();

        int end = 1;
        for(int i = num; i>0; i--){
            end*=i;
        }
        System.out.println("factorial of "+num+" is "+end);

        s.close();
    }
}
