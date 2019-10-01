public class PorkyPig{

    public static void main(String[] args){
        run();
    }

    public static void run(){
        System.out.println(porkyPig("that's all folks!"));
    }

    /**
     * makes a string something Porky Pig would say
     * 
     * @param toSay normal string without porky pig bs
     * @return porky pig bs before string
     */
    public static String porkyPig(String toSay)
    {
        return ("Bdap bdap bb "+toSay);
    }
}