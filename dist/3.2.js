"use strict";
{
    // oop inheritance
    class Person {
        //  constructor 
        constructor(name, age, address) {
            this.name = name;
            this.age = age;
            this.address = address;
        }
        getSleep(numberOfHours) {
            console.log(`${this.name} will sleep for ${numberOfHours}`);
        }
    }
    // class 
    class Student extends Person {
        //  constructor 
        constructor(name, age, address) {
            super(name, age, address);
        }
    }
    // instance 
    const student1 = new Student("mr. student", 20, "uganda");
    class Teacher extends Person {
        //  constructor 
        constructor(name, age, address, designation) {
            super(name, age, address);
            this.designation = designation;
        }
        takeClass(numberOfClass) {
            console.log(`${this.name} will take ${numberOfClass}`);
        }
    }
    const teacher = new Teacher("Mr. teacher", 50, "uganda", "professor");
}
