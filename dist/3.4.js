"use strict";
{
    // instanceOf guard
    class Animal {
        constructor(name, species) {
            this.name = name;
            this.species = species;
        }
        makeSound() {
            console.log('i am making sound');
        }
    }
    class Dog extends Animal {
        constructor(name, species) {
            super(name, species);
        }
        makeBark() {
            console.log(`i am barking`);
        }
    }
    class Cat extends Animal {
        constructor(name, species) {
            super(name, species);
        }
        makeMeaw() {
            console.log(`i am meawing`);
        }
    }
    // we can make function to handle it in a smart way
    const isDog = (animal) => {
        return animal instanceof Dog;
    };
    const isCat = (animal) => {
        return animal instanceof Cat;
    };
    const getAnimal = (animal) => {
        // instanceof guard 
        if (isDog(animal)) {
            animal.makeBark();
        }
        else if (isCat(animal)) {
            animal.makeMeaw();
        }
        else {
            animal.makeSound();
        }
    };
    const dog = new Dog("dog  bhai", "dog");
    const cat = new Cat("cat  bhai", "cat");
    getAnimal(dog);
}
