public class SumForm{

    public static void main(String[] args){
        run();
    }

    public static void run(){
        System.out.println(sumFrom(1,10));
    }

    /**
    * this returns the sum between 2 ints
    * 
    * @param start first int
    * @param end second int (must be larger than start)
    * @return sum of all # between the 2 ints
    */
    public static int sumFrom(int start, int end)
    {
        int sum = 0;
        for(int i=start;i<=end;i++){
            sum+=i;
        }
        return sum;
    }
}

