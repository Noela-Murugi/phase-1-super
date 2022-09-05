class Pet {
    constructor(name) {
      this.name = name;
      this.owner = null;
    }

    speak() {
      return `${this.name} speaks.`;
    }
  }

  // Inherits from Pet
  class Dog extends Pet {
    constructor(name, breed) {
      super(name); /* new */
      this.breed = breed;
    }
  }

//   const creature = new Pet("The Thing");
//   const dog = new Dog("Spot", "Foxhound");

  dog;

  class Pet {
    constructor(name) {
      this.name = name;
      this.owner = null;
    }

    static definition() {
      return `A pet is an animal kept primarily for a person's company.`;
    }
  }

  // Inherits from Pet
  class Dog extends Pet {
    constructor(name, breed) {
      super(name);
      this.breed = breed;
    }

    static definition() {
      return (
        super.definition() + " Dogs are one of the most common types of pets."
      );
    }
  }

  const creature = new Pet("The Thing");
  const dog = new Dog("Spot", "foxhound");

  Pet.definition();
  // => "A pet is an animal kept primarily for a person's company."
  Dog.definition();
