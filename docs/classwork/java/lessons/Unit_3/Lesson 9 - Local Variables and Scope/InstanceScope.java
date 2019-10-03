public class InstanceScope
{
    private static String instanceVariable = "Hello! I'm an instance variable!";
    private static int counter = 0; 
  
    public static void main(String[] args) {
        System.out.println("instanceVariable exists throughout the entire class.");
        System.out.println();
        
        System.out.println("instanceVariable exists in run: " + instanceVariable);
        counter++;
        System.out.println("Counter: " + counter);
        
        method1();
        method2();
    }
    
    public static void method1()
    {
        System.out.println("and in method1: " + instanceVariable);
        counter++;
        System.out.println("Counter: " + counter);
    }
    
    public static void method2()
    {
        System.out.println("and in method2: " + instanceVariable);
        counter++;
        System.out.println("Counter: " + counter);
    }
}
