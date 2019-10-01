public class FullName{

    public static void main(String[] args){
        run();
    }
    public static void run(){
        System.out.println(fullName("Nyx", "Dog"));
    }

    /**
     *returns a name in Last, First format
     * 
     * @param first the first name
     * @param last the last name
     * @return the full name in last first format
     */
    public static String fullName(String first, String last)
    {
        return last+", "+first;
    }
}