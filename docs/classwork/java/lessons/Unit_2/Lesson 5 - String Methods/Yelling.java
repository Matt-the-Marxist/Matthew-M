public class Yelling{

    public void main(String[] args){

    }

    public void run(){
        System.out.println(yell("hello"));
    }
    
    /**
     * returns a given string in all caps
     * 
     * @param statement the string to be made all caps
     * @return all caps string
     * 
     */
    public String yell(String statement)
    {
        return statement.toUpperCase();
    }
}