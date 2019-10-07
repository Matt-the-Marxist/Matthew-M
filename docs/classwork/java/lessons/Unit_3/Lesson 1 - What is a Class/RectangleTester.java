public class RectangleTester
{
    public static void main(String[] args) {
        run();
    }

    public static void run()
    {
        // Create a new rectangle with a width of 10 and a height of 3
        Rectangle rect = new Rectangle(10, 3);
        Rectangle s = new Rectangle(5, 12);
        Rectangle m = new Rectangle(7, 14);

        
        // Print out information about the rectangle
        System.out.println(rect);
        System.out.println(s);
        
        // Print out the area of the rectangle
        System.out.println("The area of the rectangle is " + rect.getArea());
        
        // Print out the height of the rectangle
        System.out.println("The height of the rectangle is " + rect.getHeight());
        System.out.println("");
        System.out.println(m.getHeight());
        System.out.println(m.getWidth());
        System.out.println(m.getArea());
    }
}