import java.util.Scanner;

/* This program prompts the user for their name
 * and age, and then prints it back out. 
 */
public class UserInput
{
    public static void main(String[] args) {

        Scanner s = new Scanner (System.in);
        System.out.println("Name? ");
        String name = s.nextLine();
    	System.out.println("Name is: " + name);
        
        System.out.print("Age? ");
    	int age = s.nextInt();
        System.out.println("Age is: " + age); 
        s.close();
    }
}
