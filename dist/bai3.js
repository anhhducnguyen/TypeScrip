"use strict";
let firstName = "nguyen";
let lastName = "anh";
let fullName;
if (firstName.length > 0 && lastName.length > 0) {
    firstName = firstName[0].toLocaleUpperCase() + firstName.slice(1);
    lastName = lastName[0].toLocaleUpperCase() + lastName.slice(1);
    fullName = firstName + " " + lastName;
    console.log(fullName);
}
//# sourceMappingURL=bai3.js.map