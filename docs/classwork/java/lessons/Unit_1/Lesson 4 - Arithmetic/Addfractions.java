import java.util.Scanner;

public class Addfractions
{
    public static void main(String[] args)
    {
        Scanner s = new Scanner(System.in);
        System.out.println("numerator 1");
        int n1 = s.nextInt();

        System.out.println("denominator 1");
        int d1 = s.nextInt();
        String frac1 = n1+"/"+d1;
        System.out.println(frac1);

        System.out.println("numerator 2");
        int n2 = s.nextInt();

        System.out.println("denominator 2");
        int d2 = s.nextInt();
        String frac2 = n2+"/"+d2;
        System.out.println(frac2);

        int nfin = n1*d2+n2*d1;
        int dfin = d1*d2;
        String fracFin = nfin+"/"+dfin;
        System.out.println(frac1+" + "+frac2+" = "+fracFin);
        s.close();
    }
}
