import java.util.Scanner;

public class MadLibs
{
    public static void main(String[] args)
    {
        Scanner s = new Scanner(System.in);
        System.out.println("Give a Name: ");
        String name = s.nextLine();
        
        System.out.println("Give the pronoun matching the name\n(such as he/she/them/ect...): ");
        String proNoun = s.nextLine();
        
        System.out.println("Give the possessive pronoun matching the name\n(such as his/hers/theirs/ect...): ");
        String posProNoun = s.nextLine();
        
        System.out.println("Give a Dance Move: ");
        String dance = s.nextLine();
        
        System.out.println("Give a verb- past-tense: ");
        String v1 = s.nextLine();
        
        System.out.println("Give a verb- past-tense: ");
        String v2 = s.nextLine();
        
        System.out.println("Give a verb- past-tense: ");
        String v3 = s.nextLine();
        
        System.out.println("Give a verb- past-tense: ");
        String v4 = s.nextLine();
        
        System.out.println("Give a verb- past-tense: ");
        String v5 = s.nextLine();
        s.close();

        System.out.println("When "+name+" went to area 51, "+proNoun+" saw an alien doing "+dance+". Not 2 minutes later, he was "+v1+" by an air force man who said \"you've seen too much.\" "+name+" smiled and said \"no u\" and the soldier "+v2+" and said \"what...?\" "+name+" "+v3+" and walked away. "+proNoun+" "+v4+" "+posProNoun+" Alien girlfriend and "+v5+" into the sunset.");
    }
}

/*
when [Name] went to area 51, [pronoun matching name] saw an alien doing [dance move].
not 2 minutes later, he was [verb- past-tense] by an air force man who said "you've seen too much."
[name] smiled and said "no u" and the soldier [verb- past-tense]
"what...?" [name] [verb past-tense] and walked away.[pronoun matching name] [verb- past-tense] [pronoun possessive] Alien girlfriend and [verb- past-tense] into the sunset.
*/