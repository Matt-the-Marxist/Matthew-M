import java.util.Scanner;

public class Poetry
{
    public static void main(String[] args)
    {
        Scanner s = new Scanner(System.in);
        System.out.println("This is a haiku.\nIt really isn't much fun.\nDon't let me finish.\n\n");
        System.out.println("Bring me the one who's Name\nIs writen here; they're to blame\nThey dont really Care\nCant Blame them i swear\nHave taken my time, what a shame\n\n");
        
        System.out.println("Your Turn (enter empty line to end):");
        
        String poem = "";

        while(true)
        {
            String temp = s.nextLine();
            if(temp.equals(""))
            {
                break;
            }
            poem +="\n"+temp;
        }
        System.out.println(poem);
        s.close();
    }
}
