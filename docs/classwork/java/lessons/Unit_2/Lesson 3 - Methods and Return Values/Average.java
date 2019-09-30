public class Average
{
    public static void main(String[] args) {
        for(double i = 3; i<5; i= i + (1.0/7.0)){
            for(double j = 5;j>4; j =j - (1.0/11.0)){
                System.out.println(average(i, j));
            }
        }
    }

    public static double average(double a, double b)
    {
        return((a+b)/2);
    }   
}

