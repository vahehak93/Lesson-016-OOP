class Person {
    constructor(firstName, lastName, gender, age) {
        this._firstName = firstName
        this._lastName = lastName
        this._gender = gender
        this._age = age
    };

    get firstName() {
        return this._firstName
    };
    get lastName() {
        return this._lastName
    };
    get gender() {
        return this._gender
    };
    get age() {
        return this._age
    };

    set firstName(newfirstName) {
        if (typeof(newfirstName === "string")) {
            this._firstName = newfirstName
        }
        
    };
    set lastName(newlastName) {
        if (typeof(newlastName === "string")) {
        this._lastName = newlastName
        }
    };
    set gender(newGender) {
        if (typeof(newGender === "string")) {
        this._gender = newGender
        }
    };
    set age(newAge) {
        if (typeof(newAge === "number")) {
        this._age = newAge
        }
    };

    toString = function() {
        return `${this._firstName} ${this._lastName}, ${this._age} years old`
    };



}

let user1 = new Person("Vahe", "Hakobyan", "male", 28)
user1.firstName = "Arman"
// console.log(user1.toString())
// console.log(typeof user1.firstName)


class Student extends Person {
    constructor(firstName, lastName, gender, age, year, fee){
        super(firstName, lastName, gender, age);
        this._year = year
        this._fee = fee
        this._program = [] 
    };
    get year() {
        return this._year
    };
    get fee() {
        return this._fee
    };
    get program() {
        return this._program
    };

    set year(newYear) {
        if (typeof(newYear === "number")) {
            this._year = newYear
        }
    };

    set fee(newFee) {
        if (typeof(newFee === "number")) {
            this._fee = newFee
        }
    };
    set program(newProgram) {
        if (typeof(newProgram === "string")) {
            this._program = newProgram
        }
    };

    passExam = function(programName, grade) {
        let obj = {programName: programName, grade: grade}
        this._program.push(obj)
        this._year++
        
    };
    isAllPassed = function() {
        let count = 0;
        for (let i = 0; i < this._program.length; i++) {
            // console.log(this._program.length)
            
            console.log(i)
            if (this._program[i].grade >= 50) {
                count++  
            }
        if (count === this._program.length) {
            return true
            } 
        return false  
        }
           
    }
    
}

const student1 = new Student("Tigran", "Hakobyan", "male", 30, 2022, 500000)



student1.passExam("Algebra", 80)
student1.passExam("Chemistry", 50)
student1.passExam("math", 60)

// console.log(student1.passExam("Algebra", 50))
console.log(student1)
// console.log(student1._year)
console.log(student1.isAllPassed())
// console.log(student1.isAllPassed())
// console.log(student1._program.grade)