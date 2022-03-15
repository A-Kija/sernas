class Animal {

    constructor(t) {
        this.type = t;
        this.sleep = false;
        this.food = 0;
    }

    goSleep() {
        this.sleep = true;
    }

    wakeUp() {
        this.sleep = false;
    }

    eat(amount) {
        if (!this.sleep) {
            this.food += amount;
        }
    }

}


const lape = new Animal('Lapė');

const meska = new Animal('Meška');

meska.goSleep();

lape.eat(22.2);

meska.eat(147.27);

lape.eat(8.8);

// for (const what in meska) {
//     console.log(what);
// }


console.log(lape);
console.log(meska);