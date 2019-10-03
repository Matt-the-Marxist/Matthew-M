import java.util.Scanner;

public class FindMinimum
{
    public static void main(String[] args) {
        Scanner s = new Scanner(System.in);
        
        int smallest = 2147483647;

        for(int i = 0;i<3; i++){
            System.out.println("int #"+(i+1));
            int temp = s.nextInt();
            if(temp<smallest){
                smallest = temp;
            }
        }
        System.out.println("smallest is "+smallest);
        
        s.close();
    }
}
