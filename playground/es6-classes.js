class Person {
    constructor(name = 'Anonymous', age = 0) {
        this.name = name;
        this.age = age;
    }
    getDescription() {
        return `${this.name} is ${this.age} year(s) old.`
    }
}

class Traveller extends Person {
    constructor(name, age, homeLocation) {
        super(name, age);
        this.homeLocation = homeLocation;
    }

    getDescription() {
        let description = super.getDescription();
        if (!!this.homeLocation) 
            description += `I am visiting from ${this.homeLocation}`
        return description
    }
}

const user1 = new Traveller('ojas', 20);
console.log(user1.getDescription())