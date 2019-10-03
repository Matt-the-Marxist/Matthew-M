public class NullPointerExample 
{
    // Declare our instance variables
    private static Person realPerson;
    private static Person ghost;
    
    public static void main(String[] args) {
        run();
    }
    
    public static void run()
    {
        // Initialize realPerson
        realPerson = new Person("Mike", 45);
        
        // If we don't define a toString method
        // the actual memory address is printed.
        System.out.println(realPerson);
        
        // Initialize to a new Person, get a new memory address
        realPerson = new Person("Michael", 45);
        System.out.println(realPerson);
        
        // ghost is never initialized, so there is no
        // memory address to point to.
        // Instead, the value held in the variable is null
        System.out.println(ghost);
        
        // Calling a method on an object that is null
        // results in a NullPointerException!
        String name = ghost.getName();
    }
}
