public class CoinFlips
{
    public static final int FLIPS = 100;
    private static int heads = 0;

    public static void main(String[] args) {

        for(int i=0;i<FLIPS; i++){
            int a = (int)(Randomizer.nextDouble()+.5);
            heads+=a;
            if(a==1){
                System.out.println("heads");
            }else{System.out.println("tails");}

    
        }

        System.out.println("heads: "+heads+"; "+((double)heads/(double)FLIPS));
        System.out.println("tails: "+(FLIPS-heads)+"; "+((double)(FLIPS-heads)/(double)FLIPS));

    }
}