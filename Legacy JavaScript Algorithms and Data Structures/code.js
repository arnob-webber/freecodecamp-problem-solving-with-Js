
const contacts = [
    {
        firstName: "Akira",
        lastName: "Laine",
        number: "123456789",
        likes: ["Pizza", "Coding", "Brownie Points"]
    },
    {
        firstName: "Harry",
        lastName: "Potter",
        number: "987654321",
        likes: ["Magic", "Hogwarts", "Quidditch"]
    },
    {
        firstName: "Sherlock",
        lastName: "Holmes",
        number: "5555555555",
        likes: ["Intriguing Cases", "Violin"]
    },
    {
        firstName: "Kristian",
        lastName: "Vos",
        number: "765432109",
        likes: ["JavaScript", "Gaming", "Foxes"]
    }
];

function lookUpProfile(name, prop) {

    for (let nm = 0; nm < contacts.length; nm++) {

        if (contacts[nm].firstName === name) {

            if (contacts[nm].hasOwnProperty(prop)) {
                return contacts[nm][prop]; 
            } else {
                return "No such property"; 
            }
        }
    }
    return "No such contact"; 
}


console.log(lookUpProfile("Kristian", "lastName")); 
console.log(lookUpProfile("Sherlock", "likes"));    
console.log(lookUpProfile("Harry", "likes"));       
console.log(lookUpProfile("Bob", "number"));        
console.log(lookUpProfile("Bob", "potato"));      
console.log(lookUpProfile("Akira", "address"));     

