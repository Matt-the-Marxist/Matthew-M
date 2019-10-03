public class Circle
{
    private static final int DEFAULT_RADIUS = 10;
    private static final String DEFAULT_COLOR = "blue";
    
    private int radius;
    private String color;
    
    // Constructor that takes both parameters
    public Circle(int theRadius, String theColor)
    {
        radius = theRadius;
        color = theColor;
    }
    
    // Constructor that only takes a radius
    public Circle(int theRadius)
    {
        radius = theRadius;
        color = DEFAULT_COLOR;
    }
    
    // Constructor that only takes a color
    public Circle(String theColor)
    {
        radius = DEFAULT_RADIUS;
        color = theColor;
    }
    
    // Constructor that takes no parameters
    public Circle()
    {
        radius = DEFAULT_RADIUS;
        color = DEFAULT_COLOR;
    }
    
    public String toString()
    {
        return color + " circle with radius " + radius;
    }
}
