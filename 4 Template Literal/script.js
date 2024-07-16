console.log("Script loaded");

const Person = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    job: "Developer",

    // Method to get full name
    getFullName: function () {
        return `${this.firstName} ${this.lastName}`;
    },

    // Method to get a description
    getDescription: function () {
        return `${this.firstName} is a ${this.age}-year-old ${this.job}.`;
    }
};


// Template literal
const personList = `
            <ul>
                <li>First Name: ${Person.firstName}</li>
                <li>Last Name: ${Person.lastName}</li>
                <li>Age: ${Person.age}</li>
                <li>Job: ${Person.job}</li>
                <li>Full Name: ${Person.getFullName()}</li>
                <li>Description: ${Person.getDescription()}</li>
            </ul>
        `;


document.getElementById('personDetails').innerHTML = personList;
