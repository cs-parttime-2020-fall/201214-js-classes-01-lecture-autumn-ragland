// console.log("20 12 14 JS Classes Lecture"); // check that files are linked

// Object Literal Notation Review --------------------
// Declare four band member objects with name and instrument properties and output each member to the console
let member1 = {
    name : "Dee Dee",
    instrument : "Vocals"
}
console.log(member1);
// console.log(member1.name);
// console.log(member1.instrument);
let member2 = {
    name : "Jules Medeiros",
    instrument : "Guitar"
}
console.log(member2);
// console.log(member2.name);
// console.log(member2.instrument);
let member3 = {
    name : "Malia James",
    instrument : "Bass"
}
console.log(member3);
let member4 = {
    name : "Sandra Vu",
    instrument : "Drums"
}
console.log(member4);

// Declare a function printMemberProps that accepts an object and outputs the value of the name and instrument properties to the console
function printMemberProps(member){
    console.log(`${member.name} plays ${member.instrument} in the Dum Dum Girls Band`);
}
// Call the function 4 times, passing in each band member
// printMemberProps(member1);
// printMemberProps(member2);
// printMemberProps(member3);
// printMemberProps(member4);

// Update the instrument property of one band member to piano
// printMemberProps(member3);
// member3.instrument = "Piano";
// printMemberProps(member3);

// Create an Implementing a Class --------------------

// // Declare a class DumDumGirl with a constructor that accepts two arguments : name and instrument
// class DumDumGirl {
//     constructor(memberName, instrument){
//         this.name = memberName;
//         this.instrument = instrument;
//     }
// }

// // Create four instances of the DumDumGirl class using the same property values from the previous section
// let girl1 = new DumDumGirl("Dee Dee", "Vocals");
// console.log(girl1);

// let girl2 = new DumDumGirl("Jules Medeiros", "Guitar");
// console.log(girl2);

// let girl3 = new DumDumGirl("Malia James", "Bass");
// console.log(girl3);

// let girl4 = new DumDumGirl("Sandra Vu", "Drums");
// console.log(girl4);
// Class Methods

// Declare a class DumDumGirl with a constructor that accepts two arguments : name and instrument
class DumDumGirl {
    constructor(memberName, instrument){
        this.name = memberName;
        this.instrument = instrument;
    }
    // outputs a DumDumGirl class instance's properties to the console
    printMemberProps(){
        console.log(`${this.name} plays ${this.instrument} in the Dum Dum Girls Band`);
    }
    // accepts one argument and updates a DumDumGirl class instance's instrument property
    updateInstrument(newInstrument){
        this.instrument = newInstrument;
    }
}

// Create two instances of the DumDumGirl class using the same property values from the previous section
let girl1 = new DumDumGirl("Dee Dee", "Vocals");
girl1.printMemberProps();
let girl2 = new DumDumGirl("Jules Medeiros", "Guitar");
girl2.printMemberProps();
girl2.updateInstrument("Piano");
girl2.printMemberProps();

// Student class with name and average grade properties set in constructor
class Student{
    constructor(studentName, studentGrade){
        this.name = studentName;
        this.averageGrade = studentGrade;
    }
    // method to output properties
    printStudentInfo(){
        console.log(`Student ${this.name} has an average grade of ${this.averageGrade} `);
    }
    // method to update average grade property from argument
    updateGrade(newGrade){
        this.averageGrade = newGrade;
    }
}

// create an instance of the Student class
let student1 = new Student("Ava", 85);
student1.printStudentInfo(); // call class method

// create an instance of the Student class
let student2 = new Student("Sheila", 95);
student2.printStudentInfo(); // call class method

// update student grade via class method
student2.updateGrade(100);
student2.printStudentInfo();