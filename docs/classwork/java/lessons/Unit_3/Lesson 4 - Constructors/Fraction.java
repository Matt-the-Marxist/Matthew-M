public class Fraction
{
    private int numerator;
    private int denominator;
    
    private int sNumerator;
    private int sDenominator;


    public Fraction(int n, int d){
        numerator = n;
        denominator = d;

        sNumerator = n/GCD(n,d);
        sDenominator = d/GCD(n,d);

    }

    public String toString(){
        if(sNumerator!=numerator){
            return ""+numerator+"/"+denominator+" or "+sNumerator+"/"+sDenominator;
        }
        else{return ""+numerator+"/"+denominator;}
    }

    private int GCD(int a, int b){
        if (b==0) return a;
        return GCD(b, a%b);
    }
}