import java.util.Scanner;

public class ThreeStrings
{
    public static void main(String[] args) {
        run();
    }
    
    public static void run()
    {
        Scanner s = new Scanner(System.in);
        
        System.out.println("string 1");
        String s1 = s.nextLine();

        System.out.println("string 2");
        String s2 = s.nextLine();

        System.out.println("string 3");
        String s3 = s.nextLine();

        if((s1+s2).equals(s3)){
            System.out.println(s1+" + "+s2+" is equal to "+s3);
        }

        s.close();
    }
}

