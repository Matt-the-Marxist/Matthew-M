public class Dog 
{
    private String breed;
    private String name;
    
    public Dog(String theBreed, String theName)
    {
        breed = theBreed;
        name = theName;
    }
    
    public String getBreed()
    {
        return breed;
    }
    
    public String getName()
    {
        return name;
    }
    
    public void setBreed(String theBreed)
    {
        breed = theBreed;
    }
    
    public void setName(String theName)
    {
        name = theName;
    }
    
    public String toString()
    {
        return name + " is a " + breed;
    }
}
