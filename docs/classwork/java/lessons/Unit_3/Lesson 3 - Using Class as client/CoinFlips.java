public class CoinFlips
{
    public static final int FLIPS = 100;
    private static int heads = 0;
    public static void main(String[] args) {
        Randomizer r = new Randomizer();
        for(int i=0;i<FLIPS; i++){
            int a = (int)(r.nextDouble()+.5);
            heads+=a;
            if((boolean)a){
                
            }
    
        }
    }
}