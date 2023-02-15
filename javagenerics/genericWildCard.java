package javagenerics;

import java.util.ArrayList;
import java.util.Comparator;
import java.util.List;

// class Juicer {
//     public static void juiceMaker(FruitBox<? extends Fruit> box) {
//         System.out.print("Making Juice");
//     }
// }

// With using genericMethod
class Juicer {
    public static <T> void juiceMaker(FruitBox<T> box) {
        System.out.print("Making Juice");
    }
}

class wildCardTest {
    public static void main(String[] args) {
        FruitBox<Fruit> fb = new FruitBox<>();
        FruitBox<Apple> ab = new FruitBox<>();
        Juicer.juiceMaker(fb);
        Juicer.<Apple>juiceMaker(ab);

        ArrayList<Apple> al = new ArrayList<>();
        FruitSorter.sort(al, new FruitCompare());
    }
}

class FruitSorter {
    static <T> void sort(List<T> fruits, Comparator<? super T> c) {
    }
}

class FruitCompare implements Comparator<Fruit> {
    @Override
    public int compare(Fruit o1, Fruit o2) {
        return o1.price - o2.price;
    }
}

class GenericMethod<T> {
    // someMethod()의 T와 GenericMethod의 T는 서로 완전히 다른 T이다.
    static <T> void someMethod() {
    }
}

// class AppleCompare implements Comparator<Apple> {
// @Override
// public int compare(Apple o1, Apple o2) {
// return o1.price - o2.price;
// }
// }

// class GrapeCompare implements Comparator<Grape> {
// @Override
// public int compare(Grape o1, Grape o2) {
// return o1.price - o2.price;
// }
// }