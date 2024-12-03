"use strict";
let mes = "Hello";
function greet(name) {
    return `${mes}, ${name}`;
}
;
console.log(greet("Duc"));
let ramdomValue = 10;
let numbers = [1, 2, 3, 4];
let strings = ["a", "b", "c"];
let person = ["Duc Anh", 22];
var Role;
(function (Role) {
    Role[Role["Admin"] = 0] = "Admin";
    Role[Role["User"] = 1] = "User";
    Role[Role["Guest"] = 2] = "Guest";
})(Role || (Role = {}));
let myRole = Role.Admin;
//# sourceMappingURL=index.js.map