
// Constructor Function
function User(firstName, lastName, age, gender) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.gender = gender;
}

var user1 = new User('Gary', 'Johnson', '38', 'male');

console.log(user1);

var user200 = new User('Jamila', 'Harris', '32', 'female');

console.log(user200);