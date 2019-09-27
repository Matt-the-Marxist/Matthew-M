import java.util.Scanner;

public class GuessTheNumber
{
    public static void main(String[] args) {
        Scanner s = new Scanner(System.in);
        int secretNumber = 6;
        
        System.out.println("I'm thinking of a number between 1 and 10.\nSee if you can guess the number!");
        
        while(true){
            System.out.println("Guess a number 1-10");
            if(s.nextInt()==secretNumber){
                break;
            }
            System.out.println("Try again!");
        }
        System.out.println("Correct!");
        s.close();
    }
}
