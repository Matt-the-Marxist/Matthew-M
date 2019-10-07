public class PointTester
{
    public static void main(String[] args) {
        run();
    }

    public static void run()
    {
        Point p = new Point(10, 5);
        System.out.println(p);
        p.move(3, 4);
        
        Point m = new Point(2, 4);

        System.out.println(m);
        System.out.println(p);
    }
}