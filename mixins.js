function mixin(target, ...sources) {
    Object.assign(target, ...sources)
}

const canEat = {
    eat: function () {
        this.hunger--;
        console.log('eating');
    }
};

const canWalk = {
    walk: function () {
        console.log('walking');
    }
};

const canSwin = {
    swim: function () {
        console.log('swim');
    }
};

function Person() { }
// use Object.assign to copy properties  and methods from one object to another
mixin(Person.prototype, canEat, canWalk);

const person = new Person();
console.log(person);

function Goldfish() { }
mixin(Goldfish.prototype, canEat, canSwin);
const goldfish = new Goldfish();