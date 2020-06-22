//==========Person Module================//

//Creating var for person
const person = {
    name : 'Shivanshu Kashyap',
    age : 21
};

console.log(__dirname,__filename);

//================Creating classs==============//
class Person {
    constructor(name, sex, age) {
        this.name = name;
        this.sex = sex;
        this.age = age;
        
    }
    greetings(){
        console.log(`My name is ${this.name} , I'm ${this.sex} and my age is ${this.age}`)
    }
}

module.exports = Person;