def trace(fn):
    def wrapper():
        print(fn.__name__ + " function called")
        fn()
    return wrapper

@trace
def fn1():
    print("Decorator test")

fn1()