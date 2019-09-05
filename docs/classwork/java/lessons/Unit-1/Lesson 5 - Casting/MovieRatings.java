import java.util.Scanner;

public class MovieRatings
{
    public static void main(String[] args) {
        Scanner s = new Scanner(System.in);
        System.out.println("Please enter a movie rating: ");
        double movieRating = s.nextDouble();
        
        // Round the movieRating to the nearest int and print it out!
        s.close();
    }
}
