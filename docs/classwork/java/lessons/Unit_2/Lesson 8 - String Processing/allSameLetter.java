public class AllSameLetter{

    public static void main(String[] args) {
        run();
    }

    public static void run(){
        System.out.println(allSameLetter("aaaaaab"));
        System.out.println(allSameLetter("aaaaaaa"));
        System.out.println(allSameLetter("aaaaaaA"));
    }


    /**
     * checks if all chars in str are the same
     */
    public static boolean allSameLetter(String str){

        char start = str.toLowerCase().charAt(0);
        for(int i=0;i<str.length();i++){
            char a = str.toLowerCase().charAt(i);
            if(a!=start){
                return false;
            }
        }
        return true;
    }
}