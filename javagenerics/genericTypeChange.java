package javagenerics;

class genericTypeChange {
    public static void main(String[] args) {
        // Generic <-> Non-Generic
        Box box = new Box();
        Box<String> strbox = new Box<>();

        box = (Box) strbox;
        strbox = (Box<String>) box;

        // Generics <-> Generics
        Box<Object> objBox = new Box<>();
        Box<Integer> intObj = new Box<>();
        Box<Integer> intObj2 = new Box<>();
        intObj = intObj2; // 동일한 타입이 대입된 Generics간에는 OK
        // intObj = objBox; // Error

        // Type Change using wildcard
        Box<? extends Fruit> fbox = new Box<>();
        Box<Apple> abox = new Box<>();
        Box<Grape> gbox = new Box<>();
        fbox = abox;
        abox = fbox; // Error
    }
}
