{
    //abstraction 1. interface 2. abstract

    // creating abstraction by interface 
    interface Vehicle1 {
        startEngine(): void
        stopEngine(): void
        move(): void
    }

    class Car1 implements Vehicle1 {
        startEngine(): void {
            console.log(`i am starting the cat engine`);
        }
        stopEngine(): void {
            console.log(`i am stopping the car`);
        }
        move(): void {
            console.log(`i am moving the car`);
        }
        test() {
            console.log(`i am testing`);
        }
    }

    const toyotaCar = new Car1()
    toyotaCar.startEngine()

    // creating abstraction by abstract class

    abstract class Car2 {
        abstract startEngine(): void
        abstract stopEngine(): void
        abstract move(): void
        test() {
            console.log("object");
        }
    }
class ToyotaCar extends Car2{
    startEngine(): void {
        console.log(`i am starting the car engine`);
    }
    stopEngine(): void {
        console.log(`i am stopping the car engine`);
    }
    move(): void {
        console.log(`i am moving the car`);
    }
}




// const hondaCar = new Car2()
// hondaCar.startEngine()


}