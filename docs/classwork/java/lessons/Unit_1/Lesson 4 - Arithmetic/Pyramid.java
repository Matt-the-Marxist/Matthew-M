import java.util.Scanner;

public class Pyramid
{
    public static void main(String[] args) {
        Scanner s = new Scanner(System.in);
        System.out.println("Enter the number of blocks used to build the pyramid");
        double blocks = s.nextDouble();
        double weight = blocks*2.5;
        System.out.println("The pyramid weighs "+weight+" tons");
        s.close();
    }
}
