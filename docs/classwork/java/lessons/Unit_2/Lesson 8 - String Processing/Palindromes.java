import java.util.Scanner;

public class Palindromes
{
    /**
     * This program lets the user input some text and
     * prints out whether or not that text is a palindrome.
     */
    public static void main(String[] args) {
        run();
    }
    
     public static void run()
    {
        Scanner s = new Scanner(System.in);
        System.out.println("Type in your text: ");
        String text = s.nextLine();
        if(isPalindrome(text))
        {
            System.out.println("Your word is a palindrome!");
        }
        else
        {
            System.out.println("Not a palindrome :(");
        }
        s.close();
    }
    
    /**
     * This method determines if a String is a palindrome,
     * which means it is the same forwards and backwards.
     * 
     * @param text The text we want to determine if it is a palindrome.
     * @return A boolean of whether or not it was a palindrome.
     */
    private static boolean isPalindrome(String text)
    {
        String reversed = reverse(text);
        if(text.equals(reversed))
        {
            return true;
        }
        else
        {
            return false;
        }
    }
    
    /**
     * This method reverses a String.
     * 
     * @param text The string to reverse.
     * @return The new reversed String.
     */
    private static String reverse(String text)
    {
        String result = "";
        for(int i = text.length() - 1; i >= 0; i--)
        {
            char cur = text.charAt(i);
            result += cur;
        }
        return result;
    }
    

}