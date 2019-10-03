public class GradeRange
{
    public static void main(String[] args) {
        int grade = readInt("What was your grade? ");
	    boolean gotB = grade >= 80 && grade < 90;
	    System.out.println("Got a B: " + gotB);
    }
}
