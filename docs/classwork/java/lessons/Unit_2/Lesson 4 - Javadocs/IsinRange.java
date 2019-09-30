public class IsinRange{

    public static void main(String[] args){
        run();
    }

    public static void run(){
        System.out.println(inRange(12, 10, 13));
        System.out.println(inRange(19, 10, 13));
    }

    /**
     * this returns if a nuber is between a min and max 
     * 
     * @param num the number in question
     * @param min the low end of the range
     * @param max the high end of the range
     * @return if the number is between the min and max
     */
    public static boolean inRange(int num, int min, int max)
    {
        if(num>=min && num<=max){
            return true;
        }
        return false;
}
}