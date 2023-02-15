package javagenerics;

import java.lang.reflect.Array;

class Box<T> {
    private T[] items;

    // static T item; // Error
    // static int compare(T t1, T t2); // Error

    public void setItems(Class<T> cls) {
        this.setItems(cls, 10);
    }

    public void setItems(Class<T> cls, int size) {
        this.items = (T[]) Array.newInstance(cls, size);
    }
}