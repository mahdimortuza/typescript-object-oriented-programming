
{
    class Car1 {
        startEngine() {
            console.log(`i am starting the cat engine`);
        }
        stopEngine() {
            console.log(`i am stopping the car`);
        }
        move() {
            console.log(`i am moving the car`);
        }
        test() {
            console.log(`i am testing`);
        }
    }
    const toyotaCar = new Car1();
    toyotaCar.startEngine();
    // creating abstraction by abstract class
    class Car2 {
        test() {
            console.log("object");
        }
    }
    class ToyotaCar extends Car2 {
        startEngine() {
            console.log(`i am starting the car engine`);
        }
        stopEngine() {
            console.log(`i am stopping the car engine`);
        }
        move() {
            console.log(`i am moving the car`);
        }
    }
    // const hondaCar = new Car2()
    // hondaCar.startEngine()
}
