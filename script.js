class Person {
  constructor(name, age, happiness) {
    this.name = name;
    this.age = age;
    this.happiness = happiness;
  }

  info() {
    console.log("Людина: " + this.name + ". Рік: " + this.age);
  }
}

var alex = new Person("Alex", 45, true);
var bob = new Person("Bob", 25, false);

alex.name = "alex2";
alex.info();
bob.info();
