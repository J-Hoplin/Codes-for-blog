package javaEnum;

enum Kind {
    CLOVER, HEART, DIAMOND, SPADE;
}

enum Value {
    ONE, TWO, THREE, FOUR;
}

abstract class abctest {
    protected final int t1 = 10;

    abstract void tt();
}

class Card {
    {
        this.kind = Kind.CLOVER;
        this.value = Value.ONE;
    }
    private final Kind kind;
    private final Value value;

    public static void main(String[] args) {
        System.out.println(Direction2.NORTH);
        abctest a1 = new abctest() {
            @Override
            void tt() {
                System.out.println(this.t1);
            }
        };
    }

    void test(Value value) {
        int counter = 0;
        switch (value) {
            case ONE:
                counter += 1;
                break;
            case TWO:
                counter += 2;
                break;
            case THREE:
                counter += 3;
                break;
            case FOUR:
                counter += 4;
                break;
            default:
        }
    }

    static void test2() {
        Kind[] kinds = Kind.values();
        for (Kind kind : kinds) {
            System.out.println("----------");
            System.out.println(kind.getDeclaringClass());
            System.out.println(kind.name());
            System.out.println(kind.ordinal());
            System.out.println("----------");
        }
        System.out.println(Kind.valueOf("SPADE"));
        System.out.println(Enum.valueOf(Value.class, "ONE"));
    }
}

class Direction {
    static final Direction EAST = new Direction("East");
    static final Direction SOUTH = new Direction("SOUTH");
    static final Direction WEST = new Direction("WEST");
    static final Direction NORTH = new Direction("NORTH");
    private String value;

    private Direction(String value) {
        this.value = value;
    }
}

enum Direction2 {
    EAST(1, ">"), SOUTH(2, "v"), WEST(3, "<"), NORTH(4, "^");

    private final int value;
    private final String direction;

    Direction2(int value, String direction) {
        this.value = value;
        this.direction = direction;
    }

    public String getDirection() {
        return direction;
    }

    public int getValue() {
        return value;
    }

    @Override
    public String toString() {
        return this.value + " " + this.direction;
    }
}

enum Fruits {
    APPLE(3000) {
        @Override
        int calculate(int weight) {
            return this.price * weight;
        }
    },
    ORANGE(4000) {
        @Override
        int calculate(int weight) {
            return this.price * weight;
        }
    },
    GRAPE(5000) {
        @Override
        int calculate(int weight) {
            return this.price * weight;
        }
    };

    protected final int price; // protected를 해야 추상메소드 구현에서 접근할 수 있다.

    Fruits(int price) {
        this.price = price;
    }

    public int getPrice() {
        return price;
    }

    abstract int calculate(int weight);
}