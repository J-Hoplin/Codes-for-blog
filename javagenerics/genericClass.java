package javagenerics;

class genericInstance {
    public static void main(String[] args) {
        BoxWithGeneric<String> box = new BoxWithGeneric<>();
        BoxWithGeneric box2 = new BoxWithGeneric();
    }
}

// Without generics
class BoxWithoutGeneric {
    Object something;

    void setSomething(Object something) {
        this.something = something;
    }

    Object getSomething() {
        return this.something;
    }
}

// With generics
class BoxWithGeneric<T> {
    T something;

    void setSomething(T something) {
        this.something = something;
    }

    T getSomething() {
        return this.something;
    }
}