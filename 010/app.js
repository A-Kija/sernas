class K {

    static count = 22;

    constructor(a) {
        this.amount = a;
    }

    changeAmount(value) {
        this.amount = value;
    }

    changeCount(value) {
        K.count = value;
    }


}



const obj1 = new K(5);
const obj2 = new K(7);

obj2.changeAmount(77);
obj2.changeCount(88);
obj1.changeCount(100);


console.log('obj1', obj1);
console.log('obj2', obj2);

console.log('static:', K.count);