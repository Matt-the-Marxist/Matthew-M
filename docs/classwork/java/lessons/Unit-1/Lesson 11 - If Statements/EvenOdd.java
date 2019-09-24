import java.util.Scanner;

public class EvenOdd
{
    public static void main(String[] args) {
		Scanner s = new Scanner(System.in);
		int num = s.nextInt("Number: ");
    	if(num % 2 == 0)
    	{
    		System.out.println("Number is even.");
    	}
    	else
    	{
    		System.out.println("Number is odd.");
    	}
	}
}
