public class Rectangle
{
    private int width;
    private int height;
    
    public Rectangle(int theWidth, int theHeight)
    {
        width = theWidth;
        height = theHeight;
    }
    
    public int getWidth()
    {
        return width;
    }
    
    public int getHeight()
    {
        return height;
    }
    
    public String toString()
    {
        return "Rectangle with width " + width + " and height " + height;
    }
    
    public boolean equals(Rectangle other)
    {
        return width == other.getWidth() && height == other.getHeight();
    }
}
