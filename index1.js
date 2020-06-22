//------------------Creating Event Listner------------------//
const Person = require('./person');

console.log(person.name);

console.log(person.age);



const person1 = new Person('Shivanshu', 'Male', 21);
 person1.greetings(); 

  const Logger = require('./logger');

 const logger = new Logger();

 //Event Listner
 logger.on('message', data => console.log('Called Listener', data));

 logger.log('Hello World!');
 logger.log('Hello There!');
 logger.log('Namastey!');