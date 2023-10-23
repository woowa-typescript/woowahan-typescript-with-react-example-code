class Cat {
  String name;
  public void hit() {}
}

class Arrow {
  String name;
  public void hit() {}
}

public class Main {
  public static void main(String[] args) {
  // error: incompatible types: Cat cannot be converted to Arrow
  Arrow cat = new Cat();
  // error: incompatible types: Arrow cannot be converted to Cat
  Cat arrow = new Arrow();
  }
}