public class Exercise
{
    public String title = "JavaScript Exercise";
    public String programmingLanguage = "JavaScript";
    public int points = 100;
    
    // Default constructor.
    public Exercise() 
    {
        
    }
    
    // Edit code in this constructor.
    public Exercise(String title, String programmingLanguage, int points) 
    {
        title = title;
        programmingLanguage = programmingLanguage;
        points =  points;
    }
    
    public String getTitle() {
        return title;
    }
}