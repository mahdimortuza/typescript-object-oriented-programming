{

    // oop inheritance
    class Person {
        name: string
        age: number
        address: string

        //  constructor 
        constructor(name: string, age: number, address: string) {
            this.name = name
            this.age = age
            this.address = address
        }
        getSleep(numberOfHours: number) {
            console.log(`${this.name} will sleep for ${numberOfHours}`);
        }
    }

    // class 
    class Student extends Person {
        //  constructor 
        constructor(name: string, age: number, address: string) {
            super(name, age, address)
        }

    }

    // instance 
    const student1 = new Student("mr. student", 20, "uganda")

    class Teacher extends Person {

        designation: string


        //  constructor 
        constructor(name: string, age: number, address: string, designation: string) {
            super(name, age, address)
            this.designation = designation
        }
        takeClass(numberOfClass: number) {
            console.log(`${this.name} will take ${numberOfClass}`);
        }
    }

    const teacher = new Teacher("Mr. teacher", 50, "uganda", "professor")

}