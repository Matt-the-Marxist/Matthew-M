public class LongestStreak
{
    public static final int FLIPS = 100;
    private static int heads = 0;

    public static void main(String[] args) {

        int a = 2;
        int b;
        int streak = 0;
        int longest = 0;
        for(int i=0;i<FLIPS; i++){
            b = a;
            a = (int)(Randomizer.nextDouble()+.5);
            
            if(a==b){
                streak++;
            }else{
                if(streak>longest){
                    longest = streak;
                    streak = 0;
                }
            }

            heads+=a;
            if(a==1){
                System.out.println("heads");
            }else{System.out.println("tails");}

    
        }

        System.out.println("heads: "+heads+"; "+((double)heads/(double)FLIPS));
        System.out.println("tails: "+(FLIPS-heads)+"; "+((double)(FLIPS-heads)/(double)FLIPS));
        System.out.println("Longest Streak: "+longest);

    }
}