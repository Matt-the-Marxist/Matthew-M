import java.util.Scanner;

public class HowFarAway
{
    public static void main(String[] args) {
       run();
    }
    public static void run(){
        Scanner s = new Scanner(System.in);
        
        System.out.println("Enter the latitude of the starting location:");
        double lat1 = s.nextDouble();
        System.out.println("Enter the longitude of the starting location:");
        double lon1 = s.nextDouble();

        System.out.println("Enter the latitude of the ending location:");
        double lat2 = s.nextDouble();
        System.out.println("Enter the longitude of the ending location:");
        double lon2 = s.nextDouble();

        GeoLocation loc1 = new GeoLocation(lat1, lon1);
        GeoLocation loc2 = new GeoLocation(lat2, lon2);
        double dist = loc1.distanceFrom(loc2);
        System.out.println("The distance is "+dist+" miles.");

        s.close();
    }
}