package javagenerics;

class Fruit {
    protected int price;

    Fruit(int price) {
        this.price = price;
    }
}

class Apple extends Fruit {
    Apple(int price) {
        super(price);
    }
}

class Grape extends Fruit {
    Grape(int price) {
        super(price);
    }
}

class FruitBox<T> extends Box<T> {

}

class GenericUsageTest {
    public static void main(String[] args) {
        Box<Apple> applebox = new Box<Apple>();
        Box<Fruit> fruitbox = new Box<Grape>(); // mismatch
        Box<Apple> applebox2 = new FruitBox<Apple>(); // OK
    }
}