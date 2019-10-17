public class Messages
{
    public static void main(String[] args) {
        run();
    }
    public static void run()
    {
        TextMessage btl = new TextMessage("Bart","Lisa","Where are you?");
        TextMessage ltb = new TextMessage("Lisa","Bart","I'm at school!");
        System.out.println(btl.toString());
        System.out.println(ltb.toString());
    }
}