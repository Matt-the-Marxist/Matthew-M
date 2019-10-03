import java.util.Scanner;

public class EvenOdd
{
    public static void main(String[] args) {
		Scanner s = new Scanner(System.in);
		System.out.println("Number: ");
		int num = s.nextInt();
    	if(num % 2 == 0)
    	{
    		System.out.println("Number is even.");
    	}
    	else
    	{
    		System.out.println("Number is odd.");
		}
		s.close();
	}
}
