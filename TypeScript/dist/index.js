"use strict";
class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    walk() { }
}
class Student extends Person {
    constructor(id, firstName, lastName) {
        super(firstName, lastName);
        this.id = id;
    }
}
let student = new Student(1, 'Rahul', 'Maurya');
student.walk();
//# sourceMappingURL=index.js.map