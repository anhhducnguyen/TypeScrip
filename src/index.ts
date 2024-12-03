let mes: string = "Hello";

function greet(name: string) : string {
    return `${mes}, ${name}`;
};

console.log(greet("Duc"));

let ramdomValue: any = 10;

let numbers: number[] = [1, 2, 3, 4];
let strings: Array<string> = ["a", "b", "c"];

let person: [string, number] = ["Duc Anh", 22];


enum Role {
    Admin,
    User,
    Guest
}

let myRole: Role = Role.Admin;
