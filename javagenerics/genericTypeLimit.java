package javagenerics;

interface movable {
}

class Toy {

}

class robot extends Toy {

}

class toycar extends Toy {

}

class MovableToyBox<T extends Toy & movable> extends Box<T> {

}

class MovableBox<T extends movable> extends Box<T> {
}

class ToyBox<T extends Toy> extends Box<T> {
}

public class genericTypeLimit {
    public static void main(String[] args) {
        ToyBox<robot> robots = new ToyBox<>();
        ToyBox<toycar> cars = new ToyBox<>();
    }
}
