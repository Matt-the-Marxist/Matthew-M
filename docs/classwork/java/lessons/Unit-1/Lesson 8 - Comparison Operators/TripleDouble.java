import java.util.Scanner;

public class TripleDouble
{
    public static void main(String[] args) {
        Scanner s = new Scanner(System.in);
        
        System.out.println("Points Scored?");
        int points = s.nextInt();
        
        System.out.println("# of rebounds?");
        int rebounds = s.nextInt();
        
        System.out.println("# of assists?");
        int assists = s.nextInt();


        boolean tripleDouble = (points>=10 && rebounds>=10 && assists>=10); // replace this
        
        System.out.println("Got a Triple Double? " + tripleDouble);

        s.close();
    }
}
