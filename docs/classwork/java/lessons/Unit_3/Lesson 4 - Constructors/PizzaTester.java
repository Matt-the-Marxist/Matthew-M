public class PizzaTester
{
    public static void main(String[] args) {
        String[] topM = {"cheese","sausage","pepperoni","ham"};
        String[] topC = {"cheese","tomatoes","bazil","balsamic vinegar"};
        String[] topB = {"cheese","garlic"};
        Pizza meatLovers = new Pizza(topM, "red", 12);
        Pizza caprese = new Pizza(topC, "white", 12);
        Pizza blanca = new Pizza(topB, "white", 8);
        System.out.println(meatLovers);
        System.out.println(caprese);
        System.out.println(blanca);
    }
}