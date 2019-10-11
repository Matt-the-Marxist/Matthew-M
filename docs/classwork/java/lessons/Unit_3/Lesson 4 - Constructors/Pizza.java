public class Pizza
{
    private String[] toppings;
    private String sauce;
    private int size;


    public Pizza(String[] theToppings, String theSauce, int diameter){
        toppings = theToppings;
        sauce = theSauce;
        size = diameter;

    } 
    public String toString(){
        return ""+size+" in. pizza with "+sauce+" sauce, "+String.join(", ", toppings);
    }
}